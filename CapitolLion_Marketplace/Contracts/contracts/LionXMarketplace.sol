// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "../utils/Ownable.sol";
import "../utils/ReentrancyGuard.sol";
import "../Library/SafeMath.sol";
import "../interfaces/ITRC20.sol";
import "../interfaces/ITRC721.sol";

contract LionXMarketplace is Ownable, ReentrancyGuard {
    using SafeMath for uint256;

    /// @notice Events for the contract
    event ItemListed(
        address indexed owner,
        address indexed nft,
        uint256 tokenId,
        uint256 quantity,
        address payToken,
        uint256 pricePerItem
    );
    event ItemSold(
        address indexed seller,
        address indexed buyer,
        address indexed nft,
        uint256 tokenId,
        uint256 quantity,
        address payToken,
        uint256 pricePerItem
    );
    event ItemUpdated(
        address indexed owner,
        address indexed nft,
        uint256 tokenId,
        address payToken,
        uint256 newPrice
    );
    event ItemCanceled(
        address indexed owner,
        address indexed nft,
        uint256 tokenId
    );

    event UpdatePlatformFee(uint256 platformFee);
    event UpdatePlatformFeeRecipient(address payable platformFeeRecipient);

    /// @notice Structure for listed items
    struct Listing {
        uint256 quantity;
        address payToken;
        uint256 pricePerItem;
    }

    struct TokenInfo {
        ITRC20 paytoken;
    }
    //address payable owner; //this is the address the listing fee will be deposited
    TokenInfo[] public AllowedCrypto;
    //list for every NFT listed for sal

    bytes4 private constant INTERFACE_ID_TRC721 = 0x80ac58cd;
    //bytes4 private constant INTERFACE_ID_ERC1155 = 0xd9b67a26;

    /// @notice NftAddress -> Token ID -> Minter
    mapping(address => mapping(uint256 => address)) public ownerOf;

    /// @notice NftAddress -> Token ID -> Owner -> Listing item
    mapping(address => mapping(uint256 => mapping(address => Listing)))
        public listings;
    ///this keep track of all the items listed for purchase on the marketplace
    uint256 public numberOfItems_onList;

    struct itemInfo {
        address NftAddress;
        uint256 tokenId;
        address owner;
        uint256 quantity;
        address payToken;
        uint256 pricePerItem;
    }

    mapping(uint256 => itemInfo) allItemAvailable;
    /// @notice Platform fee
    uint256 public platformFee;

    /// @notice Platform fee receipient
    address payable public feeReceipient;

    modifier isListed(
        address _nftAddress,
        uint256 _tokenId,
        address _owner
    ) {
        Listing memory listing = listings[_nftAddress][_tokenId][_owner];
        require(listing.quantity > 0, "not listed item");
        _;
    }

    modifier notListed(
        address _nftAddress,
        uint256 _tokenId,
        address _owner
    ) {
        Listing memory listing = listings[_nftAddress][_tokenId][_owner];
        require(listing.quantity == 0, "already listed");
        _;
    }

    modifier validListing(
        address _nftAddress,
        uint256 _tokenId,
        address _owner
    ) {
        Listing memory listedItem = listings[_nftAddress][_tokenId][_owner];

        _validOwner(_nftAddress, _tokenId, _owner);

        _;
    }

    /// @notice Contract initializer
    constructor(address payable _feeRecipient, uint256 _platformFee) {
        platformFee = _platformFee;
        feeReceipient = _feeRecipient;
    }

    /// @notice Method for listing NFT
    /// @param _nftAddress Address of NFT contract
    /// @param _tokenId Token ID of NFT
    /// @param _quantity token amount to list
    /// @param _payToken Paying token
    /// @param _pricePerItem sale price for each iteam

    function listItem(
        address _nftAddress,
        uint256 _tokenId,
        uint256 _quantity,
        address _payToken,
        uint256 _pricePerItem
    ) external notListed(_nftAddress, _tokenId, _msgSender()) {
        if (ITRC165(_nftAddress).supportsInterface(INTERFACE_ID_TRC721)) {
            ITRC721 nft = ITRC721(_nftAddress);
            require(nft.ownerOf(_tokenId) == _msgSender(), "not owning item");
            require(
                nft.isApprovedForAll(_msgSender(), address(this)),
                "item not approved"
            );
            require(registeredToken(_payToken), "check the AllowedCrypto");
        } else {
            revert("invalid nft address");
        }

        //registeredToken(_payToken);
        ownerOf[_nftAddress][_tokenId] = _msgSender();
        allItemAvailable[numberOfItems_onList] = itemInfo(
            _nftAddress,
            _tokenId,
            _msgSender(),
            _quantity,
            _payToken,
            _pricePerItem
        );
        listings[_nftAddress][_tokenId][_msgSender()] = Listing(
            _quantity,
            _payToken,
            _pricePerItem
        );
        emit ItemListed(
            _msgSender(),
            _nftAddress,
            _tokenId,
            _quantity,
            _payToken,
            _pricePerItem
        );
    }

    /// @notice Method for canceling listed NFT
    function cancelListing(address _nftAddress, uint256 _tokenId)
        external
        nonReentrant
        isListed(_nftAddress, _tokenId, _msgSender())
    {
        _cancelListing(_nftAddress, _tokenId, _msgSender());
    }

    /// @notice Method for updating listed NFT
    /// @param _nftAddress Address of NFT contract
    /// @param _tokenId Token ID of NFT
    /// @param _payToken payment token
    /// @param _newPrice New sale price for each iteam
    function updateListing(
        address _nftAddress,
        uint256 _tokenId,
        address _payToken,
        uint256 _newPrice
    ) external nonReentrant isListed(_nftAddress, _tokenId, _msgSender()) {
        Listing storage listedItem = listings[_nftAddress][_tokenId][
            _msgSender()
        ];

        _validOwner(_nftAddress, _tokenId, _msgSender());

        require(registeredToken(_payToken), "check the AllowedCrypto");

        listedItem.payToken = _payToken;
        listedItem.pricePerItem = _newPrice;
        emit ItemUpdated(
            _msgSender(),
            _nftAddress,
            _tokenId,
            _payToken,
            _newPrice
        );
    }

    /// @notice Method for buying listed NFT
    /// @param _nftAddress NFT contract address
    /// @param _tokenId TokenId
    function buyItem(
        address _nftAddress,
        uint256 _tokenId,
        address _payToken,
        address _owner
    ) external nonReentrant isListed(_nftAddress, _tokenId, _owner) {
        Listing memory listedItem = listings[_nftAddress][_tokenId][_owner];
        require(listedItem.payToken == _payToken, "invalid pay token");

        _buyItem(_nftAddress, _tokenId, _payToken, _owner);
    }

    function _buyItem(
        address _nftAddress,
        uint256 _tokenId,
        address _payToken,
        address _owner
    ) private {
        Listing memory listedItem = listings[_nftAddress][_tokenId][_owner];

        uint256 price = listedItem.pricePerItem.mul(listedItem.quantity);
        uint256 feeAmount = price.mul(platformFee).div(1e2);
        ITRC20(_payToken).transferFrom(msg.sender, feeReceipient, feeAmount);
        ITRC20(_payToken).transferFrom(
            msg.sender,
            _owner,
            price.sub(feeAmount)
        );

        // Transfer NFT to buyer

        ITRC721(_nftAddress).transferFrom(_owner, msg.sender, _tokenId);

        emit ItemSold(
            _owner,
            _msgSender(),
            _nftAddress,
            _tokenId,
            listedItem.quantity,
            _payToken,
            price.div(listedItem.quantity)
        );
        delete (listings[_nftAddress][_tokenId][_owner]);
    }

    /**
     @notice Method for updating platform fee
     @dev Only admin
     @param _platformFee uint16 the platform fee to set
     */
    function updatePlatformFee(uint16 _platformFee) external onlyOwner {
        platformFee = _platformFee;
        emit UpdatePlatformFee(_platformFee);
    }

    /**
     @notice Method for updating platform fee address
     @dev Only admin
     @param _platformFeeRecipient payable address the address to sends the funds to
     */
    function updatePlatformFeeRecipient(address payable _platformFeeRecipient)
        external
        onlyOwner
    {
        feeReceipient = _platformFeeRecipient;
        emit UpdatePlatformFeeRecipient(_platformFeeRecipient);
    }

    function registeredToken(address _payToken) public view returns (bool) {
        bool registered;
        for (uint i = 0; i < AllowedCrypto.length; i++) {
            if (address(AllowedCrypto[i].paytoken) == (_payToken)) {
                registered = true;
            } else {
                registered = false;
            }
        }
        return registered;
    }

    function _validOwner(
        address _nftAddress,
        uint256 _tokenId,
        address _owner
    ) internal view {
        ITRC721 nft = ITRC721(_nftAddress);
        require(nft.ownerOf(_tokenId) == _owner, "not owning item");
    }

    function viewListings() public view returns (List[] memory) {
        uint256 nftCount = nft.totalSupply();
        uint currentIndex = 0;
        List[] memory items = new List[](nftCount);
        for (uint i = 0; i < nftCount; i++) {
            if (vaultItems[i + 1].holder == address(this)) {
                uint currentId = i + 1;
                List storage currentItem = vaultItems[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    function _cancelListing(
        address _nftAddress,
        uint256 _tokenId,
        address _owner
    ) private {
        //Listing memory listedItem = listings[_nftAddress][_tokenId][_owner];

        _validOwner(_nftAddress, _tokenId, _owner);

        delete (listings[_nftAddress][_tokenId][_owner]);
        emit ItemCanceled(_owner, _nftAddress, _tokenId);
    }

    function addCurrency(ITRC20 _paytoken) public onlyOwner {
        AllowedCrypto.push(TokenInfo({paytoken: _paytoken}));
    }

    function getListing(address nftAddress, uint256 tokenId)
        external
        view
        returns (Listing memory)
    {
        return s_listings[nftAddress][tokenId];
    }
}
