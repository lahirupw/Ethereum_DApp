// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Utility{
    
    address public manager;
    uint public minimumContribution;
    mapping(address=>bool) public approvers;
    uint public approversCount;
    event minimumContributionError(string errorText);
    event authorizationErrot(string erroText);
    event requestCreated(string messageText);
    
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping (address=>bool) approvals;
    }
    
    uint public numberOfRequests;
    //Request[] public requestList;
    mapping(uint=>Request) public requestList;
    
    modifier isMinimumSatisfied(){
        if(msg.value < minimumContribution){
            emit minimumContributionError("You are not contributing the minimum amount required...!");
        }else{
            _;
        }
    }
    
    modifier onlyManager(){
        if(msg.sender != manager){
            emit authorizationErrot("You are not authoized to execute this function");
        }else{
            _;
        }
    }
    
}

contract CampaignFactory{
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
        address newCampaign = address(new Campaign(minimum, msg.sender));
        deployedCampaigns.push(newCampaign);
    }

    function getCampaignAddresses() public view returns (address[] memory){
        return deployedCampaigns;
    }

}


contract Campaign is Utility{
    
    constructor(uint minimumAmount, address creator){
        manager = creator;
        minimumContribution = minimumAmount;
    }
    
    function contribute() isMinimumSatisfied public payable{
        approvers[msg.sender] = true;
        approversCount++;
        //approvers.address(msg.sender);
    }
    
    function createRequest(string memory _description, uint _value, address _recipient, bool _complete ) onlyManager public{
        Request storage theRequest = requestList[numberOfRequests];
        //Request storage theRequest = requestList.push();
        theRequest.description = _description;
        theRequest.value = _value;
        theRequest.complete = _complete;
        theRequest.recipient= _recipient;
        theRequest.approvalCount=0;
        
        numberOfRequests++;
        //requestList.push(theRequest);
        //requestList[numberOfRequests] = theRequest;

        emit requestCreated("New Request has been created");
    }

    function approveRequest(uint _index) public{

        Request storage request = requestList[_index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint _index) onlyManager public{
        Request storage request = requestList[_index];
        require(!request.complete);
        require (request.approvalCount> approversCount/2);

        payable(request.recipient).transfer(request.value);

        request.complete = true;
    }

}