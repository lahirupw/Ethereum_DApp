import React,{Component} from "react";
import {Button, Form, Input, Message} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import {Router} from '../routes';
import Campaign from '../ethereum/campaign';

class contributeForm extends Component{

    state={
        contribution: '',
        submitInProgress: false,
        errorMessage: '',
    }

    onSubmit = async (event)=>{
        let cont = this.state.contribution;
        this.setState({submitInProgress:true, errorMessage:''});
        event.preventDefault();
        try {
            const CampaignContract = Campaign(this.props.address);
            const accounts = await web3.eth.getAccounts();
            await CampaignContract.methods.contribute().send({from: accounts[0], value: web3.utils.toWei(this.state.contribution,'ether')});
            Router.pushRoute(`/campaigns/${this.props.address}`);
            this.setState({contribution:''});
        } catch (err) {
            this.setState({errorMessage: err.message});

        }

        this.setState({submitInProgress:false});
    }


    render() {
        return(
            <Form error={this.state.errorMessage} onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input 
                    label="ether"
                    labelPosition="right"
                    value={this.state.contribution}
                    onChange={event=>this.setState({contribution: event.target.value})}/>
                </Form.Field>
                <Button loading ={this.state.submitInProgress} primary type="submit">Contribute</Button>
                <Message
                error
                header="There is an error when contributing to the contract"
                content={this.state.errorMessage}
                />
            </Form>

        );

    }
}

export default contributeForm;
