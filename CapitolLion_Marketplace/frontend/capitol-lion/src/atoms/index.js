import { atom } from "recoil"

export const addressAtom = atom({
  key: 'walletaddress',
  default: ({ address: "Connect Wallet"}),
})