const express = require('express');
const app = express();

app.set('port', process.env.PORT || 4000);
app.set('main', __dirname);

require('./settings').routeApp(app);

app.listen(app.get('port'), () => {
    console.log('Express server listening on port %d', app.get('port'));
});