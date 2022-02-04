import Layout from "../../components/layout";
import React, { Component } from "react";
import campaignContract from "../../ethereum/campaign";
import { Card, Grid, Button } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/contributeForm";
import { Link } from "../../routes";

class CampaignShowing extends Component {
  
  static async getInitialProps(props) {
    const campaign = campaignContract(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    console.log(summary);
    return {
      MinimumContribution: summary[0],
      CampaignBalance: summary[1],
      NumberOfRequests: summary[2],
      ApproverCount: summary[3],
      CampaignManager: summary[4],
      CamapignAddress: props.query.address,
    };
  }

  render() {
    return (
      <Layout>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <h3>Campaign Details</h3>
              {this.renderCards()}
            </Grid.Column>

            <Grid.Column width={4}>
              <ContributeForm address={this.props.CamapignAddress} />
            </Grid.Column>

          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.CamapignAddress}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Layout>
    );
  }

  renderCards() {
    const {
      MinimumContribution,
      CampaignBalance,
      NumberOfRequests,
      ApproverCount,
      CampaignManager,
    } = this.props;

    const items = [
      {
        header: MinimumContribution,
        description:
          "The Minimum Contribution Specified at the Time of Creating the Campaign",
        meta: "minimum contribution",
      },
      {
        header: web3.utils.fromWei(CampaignBalance, "ether"),
        description: "The Current Account Balance of the Campaign",
        meta: "account balance (ether)",
      },
      {
        header: NumberOfRequests,
        description:
          "The Number of Spending Requests that Have been Submitted to the Campaign",
        meta: "spending requests",
      },
      {
        header: ApproverCount,
        description:
          "The Number of Approvers That has been Assigned to the Campaign",
        meta: "number of approvers",
      },
      {
        header: CampaignManager,
        description: "The Owner of the Campaign Who Created the Campaign",
        meta: "campaign owner",
        style: { overflowWrap: "break-word" },
      },
    ];
    return <Card.Group items={items} />;
  }
}

export default CampaignShowing;
