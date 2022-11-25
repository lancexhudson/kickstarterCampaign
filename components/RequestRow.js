import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {
    onApprove = async () => {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id)
        .send({
            from: accounts[0]
        });
    };

    onFinalize = async () => {
        const campaign = Campaign(this.props.address);

        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(this.props.id)
        .send({
            from: accounts[0]
        });
    };

    render () {
    const { Row, Cell } = Table;
    // line below does some destructuring of code: 
    // original code -->  <Cell>{this.props.request.description}</Cell>
    // Concise code -->   <Cell>{request.description}</Cell>
    const { id, request, approversCount } = this.props;
    const readyToFinalize = request.approvalCount > approversCount / 2;

    return (
        // disabled will grey out row when request is completed
        // positive on readyToFinalize turns row green if approval count is > 1 and not marked as complete
        <Row disabled={request.complete} positive={readyToFinalize && !request.complete}> 
            <Cell>{id}</Cell>
            <Cell>{request.description}</Cell>
            {/* In campaign.sol, this is labeled as "value", not "amount" on page */}
            <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell> 
            <Cell>{request.recipient}</Cell>
            <Cell>{request.approvalCount}/{approversCount}</Cell>
            <Cell> 
                {request.complete ? null: ( // if true, no longer show button
                <Button color="green" basic onClick={this.onApprove}>Approve</Button>
                )}
            </Cell>
            <Cell>
                {request.complete ? null : (
                <Button color='teal' basic onClick={this.onFinalize}></Button>
                )}
            </Cell>
        </Row>
    );
    }
}

export default RequestRow;