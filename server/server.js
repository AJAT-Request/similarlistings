const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '/../client/dist/')));

app.get('/rooms:roomId', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.get('/listings:roomId', (req, res) => {
  const roomId = req.params.roomId;
  const queryString = 'select listing_id from listings2listings where similar_listing_id = (select similar_listing_id from listings2listings where listing_id = ?)';

  db.query(queryString, roomId, (err, results) => {
    const listingIds = [];

    results.forEach(result => (
      listingIds.push([result.listing_id])
    ));

    db.query('select * from listings where id in (?, ?, ?, ?, ?)', listingIds, (err, listings) => {
      res.send(listings);
    });
  });
});

const PORT = 3000;
app.listen(PORT, () => { console.log(`Listening on port: ${PORT}`); });
