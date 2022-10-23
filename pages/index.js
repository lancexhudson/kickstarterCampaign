import React, { Component } from 'react';
import factory from '../ethereum/factory';

// export default () => {
// return <h1>This is the campaign home page!</h1>;
// }; //functional component

class CampaignIndex extends Component {
async componentDieMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    //retrieves array of campaigns

    console.log(campaigns);
}

render() {
    return <div>Campaigns Index!</div>
    // prevents error message
}
}

export default CampaignIndex;
// necessary to keep next from throwing an error 
// npm run dev