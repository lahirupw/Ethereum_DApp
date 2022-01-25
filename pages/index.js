import React,{Component} from 'react';
import { Button, Card } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/layout.js';
import {Link} from '../routes';


class CampaignIndex extends Component {
    static async getInitialProps(){
        const campaigns =  await factory.methods.getCampaignAddresses().call();
        return {campaigns};
    }
    
    render(){
        return(
        <Layout>
        <div>
            <h3>Open Campaigns</h3>
            <Link route="/campaigns/new">
            <a>
            <Button 
            floated ="right" 
            content='Create Campaign' 
            icon='add circle' 
            labelPosition='left' 
            primary/>
            </a>
            </Link>
            {this.renderCampaign()}
        </div>
        </Layout>
        );
        
    }

    renderCampaign(){
        const items = this.props.campaigns.map(eth_address =>{
            return {
                header: eth_address,
                description: <Link route={`/campaigns/${eth_address}`}><a>View Campaign</a></Link>,
                fluid: true
            };
        });

        return <Card.Group items={items}/>;
    }

  // async componentDidMount(){
  //      const campaigns =  await factory.methods.getCampaignAddresses().call();
  //      console.log(campaigns);
        
  //  }

}

export default CampaignIndex;

