import web3 from './web3';
import campaign from './build/Campaign.json';


const getContract = (address)=>{
    
    const campaignContract = new web3.eth.Contract(campaign.abi, address);
    return(campaignContract);
    
}

export default getContract;
