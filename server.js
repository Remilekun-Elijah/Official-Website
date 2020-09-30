const express = require('express');
const app = express();

app.set('port', process.env.PORT || 4000);
app.set('main', __dirname);

require('./settings').routeApp(app);

app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});
