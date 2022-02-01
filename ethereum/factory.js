import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

//Campaign Factory Address: 0x7171cEAaA6c5780e6DB7A82192DD7fca1e86F958

const address = '0x136a632250353Bb99b4d48dB538DcB3e10cd0975'

const instance = new web3.eth.Contract(campaignFactory.abi, address);

export default instance;
