import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        // address of campaign in component
        // console.log(props.query.address);

        const summary = await campaign.methods.getSummary().call();
        // console.log(summary); notes at bottom
        return { //get summary function at Campaign.sol
            minimumContribution: summary[0], 
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            managers: summary[4]
          };
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created the campaign and can create requests to withdraw money',
                style: { overflowWrap: 'break-word' } //constrains width of card
            },

            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become an approver'
            },

            {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request attempts to withdraw money from contract pending approval from approvers'
            },

            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign'
            },

            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (in ether)',
                description: 'The balance is how much money that this campaign has left to spend'
            }
        ];

        return <Card.group items={items} />;
    };

    render () {
        return (
            <Layout>
                <h3>Campaign Show</h3>
                {this.renderCards()}
                <ContributeForm/>
            </Layout>
        );
    }
}

// Anytime that you call a function from a contract that returns multiple values,
// key value pairs are returned that appear to be an array; it is not. An object is
// returned.

export default CampaignShow;