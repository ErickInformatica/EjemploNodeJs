const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, OPTIONS ,PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-API-KEY ,X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
    next();
 });


require('./routes/userRoutes')(app);

app.listen(app.get('port'), () => {
    console.log(`Servidor esta corriendo en el puerto '${ app.get('port') }'`);
});
