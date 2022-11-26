import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
CampaignFactory.abi, '0xB6A8ece75F656376c770cEF30d2F546558431ACD' 
// 'contract instance address here -- remix'
);

export default instance;