import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);
// assumes metamask has injected web3 instance on page
export default web3;