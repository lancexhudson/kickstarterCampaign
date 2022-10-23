import web3 from './web3';
// instance from web3.js (globally avail)
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
JSON.parse(campaignFactory.interface), '0xB6A8ece75F656376c770cEF30d2F546558431ACD' 
// 'contract instance address here -- remix'
);

export default instance;