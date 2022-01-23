import Web3 from 'web3';

let web3;

if(typeof(window)!== "undefined" && typeof(window.ethereum)!=="undefined"){
    // If above conditions are satisfied then we are in the browser and metamast is running
    window.ethereum.request({method:"eth_requestAccounts"});
    web3 = new Web3(window.ethereum);
}else{
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/f89d6cdf5b174439baeaa694307b6dd7'
    );

    web3 = new Web3(provider);
}

export default web3;