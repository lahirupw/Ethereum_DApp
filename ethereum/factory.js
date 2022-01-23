import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

//Campaign Factory Address: 0x7171cEAaA6c5780e6DB7A82192DD7fca1e86F958

const address = '0x7171cEAaA6c5780e6DB7A82192DD7fca1e86F958'

const instance = new web3.eth.Contract(campaignFactory.abi, address);

export default instance;
