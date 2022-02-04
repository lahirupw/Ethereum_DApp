import React, {Component} from 'react';
import Layout from '../../../components/layout';
import {Button} from 'semantic-ui-react';
import {Link} from'../../../routes';

class RequestIndex extends Component {

    static async getInitialProps(props){
        const {address} = props.query;

        return {address};
    }

    render(){
        return(
            <Layout>
                <h2>Request List</h2>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                <a>
                    <Button primary>Add Request</Button>
                </a>
                </Link>
            </Layout>
            

        );
    }
}

export default RequestIndex;