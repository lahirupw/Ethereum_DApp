const assert = require('assert');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
const mocha = require('mocha');
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;


beforeEach (async ()=>{
    accounts = await web3.eth.getAccounts();
    //console.log(accounts);
    //console.log(compiledFactory.abi);
    //console.log(compiledFactory.evm.bytecode);

    factory = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({data: compiledFactory.evm.bytecode.object})
    .send({from: accounts[0], gas: '100000000', gasPrice:'200'});

    await factory.methods.createCampaign('100').send({from: accounts[0],gas:'100000000', gasPrice:'200'});

    [campaignAddress] = await factory.methods.getCampaignAddresses().call();

// Below is the javascript representation of a smart contract that will be used to interact with a smart contract deployed in an Ethereum network
    campaign =  await new web3.eth.Contract(compiledCampaign.abi, campaignAddress);
});

describe('campaigns',()=>{
    it('Deploys a factory and a campaign',()=>{
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('Marks the caller as the manager',async ()=>{
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0],manager);
    });

    it('Adding senders address as an approver when contributed money', async()=>{
        await campaign.methods.contribute().send({from: accounts[1], gas: '100000000', gasPrice: '200'});
        const isContributorValid = await campaign.methods.approvers(accounts[1]);
        assert(isContributorValid);
    });
    
    it('Has a minimum contribuiton',async ()=>{
        try {
            await campaign.methods.contribute().send(
                {from: accounts[1], value:'50', gas:'100000000',gasPrice:'200'}
            );
            assert(false);
        } catch (e) {
            assert(e);
        }
    });

    it('Allows a manager to make a payment request', async()=>{
        await campaign.methods.createRequest('buy plastic','100',accounts[1],false).send({from: accounts[0], gas:'100000000', gasPrice:'200'});
        const spendingRequest = await campaign.methods.requestList(0).call();
        assert.equal('buy plastic',spendingRequest.description);    
    });

    it('Processes requests', async()=>{
        await campaign.methods.contribute().send({
            from: accounts[0], value: web3.utils.toWei('10','ether')});
        await campaign.methods.createRequest('buy steel',web3.utils.toWei('5','ether'),accounts[1],false).send({
            from: accounts[0], gas:'100000000', gasPrice:'200'});

        await campaign.methods.approveRequest(0).send({from: accounts[0], gas: '100000000', gasPrice:'200'});
        await campaign.methods.finalizeRequest(0).send({from:accounts[0], gas: '100000000', gasPrice:'200'});
    
        let balance = await web3.eth.getBalance(accounts[1]);
        balance  = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        assert(balance> 103);
    });
        
});