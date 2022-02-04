import React,{Component} from 'react';
import Layout from '../../../components/layout';
import {Form, Button, Messagee, Input, Message} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import {Link, Router} from '../../../routes';


class newRequest extends Component {

    static async getInitialProps(props){
        const {address} = props.query;
        return {address};
    }

    state ={
        description:'',
        value:'',
        recipient:'',
        errorMessage:'',
        submitInProgress:false,
    };

    onSubmit = async (event)=>{
        this.setState({submitInProgress: true, errorMessage: ''});
        event.preventDefault();
        const contractInstance = await Campaign(this.props.address);
        const{description, value, recipient} = this.state;
        try {
            const accounts = await web3.eth.getAccounts();
            await contractInstance.methods.createRequest(description, web3.utils.toWei(value,'ether'), recipient, false).send({from:accounts[0], });
            Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        } catch (err) {
            this.setState({errorMessage: err.message});
            console.log(err.message);
        }
        this.setState({submitInProgress:false});
        
    }

    render(){
            return(
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                    Back
                </a>
                </Link>
                
            <h3>Create a New Spending Request</h3>
            <Form error={!!this.state.errorMessage} onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Description</label>
                    <Input value={this.state.description} onChange={event=>this.setState({description: event.target.value})}/>
                </Form.Field>
                <Form.Field>
                    <label>Value</label>
                    <Input value={this.state.value} onChange={event=>this.setState({value: event.target.value})}/>
                </Form.Field>
                <Form.Field>
                    <label>Recipient</label>
                    <Input value={this.state.recipient} onChange={event=>this.setState({recipient: event.target.value})}/>
                </Form.Field>
                <Message
                    error
                    header="There was an error when submitting the sepnding request"
                    content={this.state.errorMessage}
                    />
                    <Button loading={this.state.submitInProgress} 
                    primary> Create + </Button>
            </Form>
            </Layout>
        );
        
        
    }
}

export default newRequest;
