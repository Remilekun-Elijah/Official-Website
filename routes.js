module.exports.init = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(require('path').join(app.get('main'), '/index.html'));
    });
}