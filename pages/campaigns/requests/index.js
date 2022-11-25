import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';


class RequestIndex extends Component {
    static async getInitialProps(props) {
        const { address } = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
        const approversCount = await campaign.methods.approversCount().call();

        // Array(requestCount).fill() is getting the request count and being
        // returned up to the index, therefore providing all requests,
        // OR gives indexes that are being requested.
        // Using .map((element, index)) counts from 0 up to request count. 
        // getRequestsCount returns a number in a string but expects to be
        // passed a number. String must be parsed to and Integer.
        const requests = await Promise.all(
            Array(parseInt(requestCount))
            .fill()
            .map((element, index) => {
            return campaign.methods.requests(index).call();
            })
        );

        return { address, requests, requestCount, approversCount };
    }

    renderRows() {
        return this.props.requests.map((request, index) => {
            return <RequestRow
            key={index} // React needs a key whenever rendering list of components
            id={index}
            request={request}
            address={this.props.address}
            approversCount={this.props.approversCount}
            />
        });
    }
    
    render() {

        const { Header, Row, HeaderCell, Body } = Table; //es2015 

        return (
            <Layout>
            <h3>Requests</h3>
            <Link route={`/campaigns/${this.props.address}/requests/new`}>

            <a>
                <Button primary floated="right" style={{ marginBottom: 10 }}>Add Request</Button>
            </a>

            </Link>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID </HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Recipient</HeaderCell>
                        <HeaderCell>Approval Count</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Row>
                </Header>
            <Body>{this.renderRows()}</Body>
            </Table>
            <div>Found {this.props.requestCount}</div>
            </Layout>
        );
    }
}

export default RequestIndex;