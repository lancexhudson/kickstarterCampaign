import web3 from './web3';
// instance from web3.js (globally avail)
import CampaignFactory from './build/CampaignFactory';

const instance = new web3.eth.Contract(
CampaignFactory.abi, '0xB6A8ece75F656376c770cEF30d2F546558431ACD' 
// 'contract instance address here -- remix'
);

// const instance = new web3.eth.Contract(
//     JSON.parse(CampaignFactory.interface),
//     '0xB6A8ece75F656376c770cEF30d2F546558431ACD' 
//     // 'contract instance address here -- remix'
//     );


export default instance;