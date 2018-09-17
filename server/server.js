const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist/')));

app.get('/rooms/:roomId', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.get('/listings/:roomId', (req, res) => {
  const { roomId } = req.params;
  const queryString = 'select similar_listing_id from listings2listings where listing_id = ?';

  db.query(queryString, roomId, (err, results) => {
    const listingIds = [];

    results.forEach(result => (
      listingIds.push([result.similar_listing_id])
    ));

    db.query('select * from listings where id in (?, ?, ?, ?, ?)', listingIds, (error, listings) => {
      const names = [];
      const photoUrls = [];
      const numberOfBeds = [];
      const prices = [];
      const reviews = [];
      listings.forEach(listing => names.push(listing.name));
      listings.forEach(listing => photoUrls.push(listing.image_url));
      listings.forEach(listing => numberOfBeds.push(listing.number_of_beds));
      listings.forEach(listing => prices.push(listing.price_per_night));
      listings.forEach(listing => reviews.push(listing.number_of_reviews));
      res.send({
        names,
        photoUrls,
        numberOfBeds,
        prices,
        reviews,
      });
    });
  });
});

const PORT = 3000;
app.listen(PORT, () => { console.log(`Listening on port: ${PORT}`); });
