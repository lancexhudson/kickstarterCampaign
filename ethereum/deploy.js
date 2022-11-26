const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
require('dotenv').config();

const provider = new HDWalletProvider(
process.env.MNEMONIC_PHRASE,
  'https://rinkeby.infura.io/v3/${process.env.API.KEY}'
);
 
const web3 = new Web3(provider);
 
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    const result = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({ data: compiledFactory.evm.bytecode.object })
        .send({ gas: '1000000', from: accounts[0] });

    // console.log('contract deployed to', result.options.address);

    provider.engine.stop();
};
deploy();