import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

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
            description: (
            <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a></Link>
            ), 
            fluid: true 
            // fluid fills up width of container 
        };
    });

    return <Card.Group item= {items} />;
}

render() {
    return (
        <Layout> 
    <div>
        <h3>Open Campaigns</h3>

       <Link route="/campaigns/new">
        <a>
    <Button 
    floated="right"
    content="Create Campaign"
    icon="add circle"
    primary /> 
          {/* same as primary={true} */}
      {/* everything inside layout is props.children */}
      </a>
      </Link> 

{this.renderCampaigns()}

    </div>
    </Layout>
    );
}
}

export default CampaignIndex;
// necessary to keep next from throwing an error 
// npm run dev