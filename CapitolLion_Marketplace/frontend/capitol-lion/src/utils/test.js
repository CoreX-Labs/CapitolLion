//Example 1
async function triggercontract() {
  let instance = await tronWeb.contract().at('TUrPgCu1RwmvLT8JffE9cPnZqpyqh5UBsj');
  let res = await instance.totalSupply().call();
  console.log(res);
}
triggercontract();

