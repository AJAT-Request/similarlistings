const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();

app.use( bodyParser.json() );
app.use(express.static(__dirname + '/../client/dist'))

const PORT = 3000;
app.listen(PORT, function() {console.log('Listening on port: ' + PORT)});