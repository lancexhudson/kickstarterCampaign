import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
// initialize state object
state = {
    value: '',
    errorMessage: '',
    Loading: false
};

onSubmit = async (event) => {
event.preventDefault();

const campaign = Campaign(this.props.address);
//updates loading flag to true

this.setState({  loading: true, errorMessage: '' });

try { //properly updates after contribution
const accounts = await web3.eth.getAccounts();
await campaign.methods.contribute().send({
    from: accounts[0],
    value: web3.utils.toWei(this.state.value, 'ether')
});

Router.replaceRoute(`/campaigns/${this.props.address}`) 
// causes refresh of current page via router, updating campaign data in 30sec post transaction
} catch (err) {
this.setState({  errorMessage: err.message });
}

this.setState({ loading: false, value: '' });

};

    render() {
        return (
            <Form 
            onSubmit={this.onSubmit} error={!!this.state.errorMessage} >
            <Form.Field>

            <label>Amount to Contribute</label>

            <Input 
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label="ether" 
            labelPosition="right" />

            </Form.Field>

            <Message error header="Oops!" content={this.state.errorMessage} />

            <Button primary loading={this.state.loading}>
                Contribute!
            </Button>
            </Form>
        );
    }
}

export default ContributeForm;