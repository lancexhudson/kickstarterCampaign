const routes = require('next-routes')(); //returns function

routes
.add('campaigns/new', 'campaigns/new')
.add('/campaigns/:address', '/campaigns/show')
.add('/campaigns/:address/requests', '/campaigns/requests/index');
// 1st param: if user goes to.. 2nd param: show this page
//1st param pattern that looking for.. : is for variable
// overrides default next js routes for /new 

module.exports = routes;