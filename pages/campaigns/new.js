import React, { Component } from "react";
import {Form, Button, Input, Message} from "semantic-ui-react";
import Layout from "../../components/layout";
import Factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {

  state ={
    minimumContribution: '',
    errorMessage:'',
    submitInProgress: false,

  };

  onSubmit= async (event)=>{
    let contribution = this.state.minimumContribution;
    this.setState({submitInProgress: true, errorMessage: ''});
    event.preventDefault();
    try {
      this.state.submitInProgress = true;
      const accounts = await web3.eth.getAccounts();
      await Factory.methods.createCampaign(contribution).send({from: accounts[0],});
    } catch (error) {
      this.setState({errorMessage: error.message});

    }
    this.setState({submitInProgress: false});

  };

  render() {
    return (
      <Layout>
        <h1>New Campaign!</h1>
        <Form error ={!!this.state.errorMessage} onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Minimum Contribution Amount</label>
            <Input 
            label="wei" 
            labelPosition="right" 
            placeholder="1000"
            value={this.state.minimumContribution}
            onChange={event=>this.setState({minimumContribution: event.target.value})}
            />
          </Form.Field>
          <Message 
          error
          header="There is an error when creating the campaign"
          content={this.state.errorMessage}
          />
          <Button loading={this.state.submitInProgress} primary type="submit" >Create</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
