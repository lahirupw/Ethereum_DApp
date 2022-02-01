const solc = require('solc');
const fs = require('fs-extra');
const path = require('path');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname,'contracts','campaign.sol');
const source = fs.readFileSync(campaignPath,'utf8');
//const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath);

const inputObject ={
  language:'Solidity',
  sources:{
      'campaign.sol':{
          content:source,
      },
  },
  settings:{
      outputSelection:{
          '*':{
              '*':['*'],
          },
      },
  },
};


//fs.ensureDirSync(buildPath);

//const output = JSON.parse(solc.compile(JSON.stringify(inputObject))).contracts['campaign.sol'].CampaignFactory;
const output = JSON.parse(solc.compile(JSON.stringify(inputObject))).contracts['campaign.sol'];

for(let contract in output){
    fs.outputJSONSync(
        path.resolve(buildPath,contract+'.json'),
        output[contract]
    );
}

