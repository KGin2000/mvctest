const express = require('express');
const app = express();
const bodyParser = require('./node_modules/body-parser')
app.use(express.json());
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', require('./bigquest'));

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`) );