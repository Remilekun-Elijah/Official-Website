

module.exports = {
    config: (app) => {

    },
    routeApp: (app) => {
        require('./routes').init(app);
        console.log('App routed');
    }
} 