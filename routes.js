const routes =  require('next-routes')();

routes.add('/campaigns/new','/camapigns/new')
routes.add('/campaigns/:address','/campaigns/show')

module.exports = routes;
