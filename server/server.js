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
  const queryString = 'select listing_id from listings2listings where similar_listing_id = (select similar_listing_id from listings2listings where listing_id = ?)';

  db.query(queryString, roomId, (err, results) => {
    const listingIds = [];

    results.forEach(result => (
      listingIds.push([result.listing_id])
    ));

    db.query('select * from listings where id in (?, ?, ?, ?, ?)', listingIds, (error, listings) => {
      const names = [];
      const photoUrls = [];
      const basicInfo = [];
      const prices = [];
      const reviews = [];
      listings.forEach(listing => names.push(listing.name));
      listings.forEach(listing => photoUrls.push(listing.image_url));
      listings.forEach(listing => basicInfo.push(listing.basic_info));
      listings.forEach(listing => prices.push(listing.price_per_night));
      listings.forEach(listing => reviews.push(listing.number_of_reviews));
      res.send({
        names: names,
        photoUrls: photoUrls,
        basicInfo: basicInfo,
        prices: prices,
        reviews: reviews,
      });
    });
  });
});

const PORT = 3000;
app.listen(PORT, () => { console.log(`Listening on port: ${PORT}`); });
