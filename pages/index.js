import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import factory from '../ethereum/factory';

// export default () => {
// return <h1>This is the campaign home page!</h1>;
// }; //functional component

class CampaignIndex extends Component {

static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
    // required by next - retrieves initial data without rendering component
}

renderCampaigns() {
    const items = this.props.campaigns.map(address => {
        return {
            header: address,
            description: <a>View Campaign</a>, 
            fluid: true 
            // fluid fills up width of container 
        };
    });

    return <Card.Group item= {items} />;
}

render() {
    return <div>{this.renderCampaigns()}</div>
    // prevents error message
}
}

export default CampaignIndex;
// necessary to keep next from throwing an error 
// npm run dev