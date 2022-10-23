import Web3 from 'web3';

// const web3 = new Web3(window.web3.currentProvider);
// // assumes metamask has injected web3 instance on page
// export default web3;

let web3;
 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // in the browser and metamask is available  
  // node >> typeof window
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/${process.env.API.KEY}"
  );
  web3 = new Web3(provider);
}
 
export default web3;