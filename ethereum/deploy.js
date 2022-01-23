const HDWallet = require('@truffle/hdwallet-provider');
const Web3 = require('Web3');
const compiledFactory = require('../ethereum/build/CampaignFactory.json');

const provider = new HDWallet('dial crystal approve robot curtain sudden maximum tiny appear inflict claw add', 
'https://rinkeby.infura.io/v3/f89d6cdf5b174439baeaa694307b6dd7');

const web3 = new Web3(provider);

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    const factory = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({data: compiledFactory.evm.bytecode.object, arguments:[]})
    .send({from: accounts[0], gas:'10000000'});
    console.log(`Contract Deployed Address : ${factory.options.address}`);

    provider.engine.stop();
}

deploy();

