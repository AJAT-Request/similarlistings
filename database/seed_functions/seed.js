const con = require('../index.js');
const data = require('../data/roomData.js');
const faker = require('faker');

// ----------------- Math Helper Functions ------------------ //

const getRandomNum = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomDecimal = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return ((Math.random() * (max - min)) + min).toFixed(1);
}

// --------------------------------------------------------- //


const getListings = function() {
  const listings = [];
  const photoUrls = data.photoUrls;

  for (let i = 0; i < 100; i++) {
    const roomName = data.rooms[i];
    const basicInfo = faker.lorem.sentence();
    const pricePerNight = getRandomNum(50, 500);
    const averageRating = getRandomDecimal(3, 5);
    const randomIndex = getRandomNum(0, 10);
    const photoUrl = photoUrls[randomIndex];

    const listing = [roomName, basicInfo, pricePerNight, averageRating, photoUrl];
    listings.push(listing)
  }

  return listings;
}

const seedListings = function() {
  const queryString = 'insert into listings(name, basic_info, price_per_night, average_rating, image_url) values ?';
  const queryArgs = getListings();

  con.query(queryString, [queryArgs], function(err, results) {
  	console.log('Added ' + results.affectedRows + ' rows to listings');
  });

}

const seedJoinTable = function() {
  const queryString = 'insert into listings2listings(listing_id, similar_listing_id) values ?';
  const queryArgs = [];

  for (let i = 1; i < 101; i++) {
    const randomSimilarListing = getRandomNum(1, 11);
    queryArgs.push([i, randomSimilarListing]);

  }

  con.query(queryString, [queryArgs], function(err, results) {
    if (err) {
      return console.log(err);
    }
    console.log('Added ' + results.affectedRows + ' rows to listings2listings')
  });
}

seedListings();
seedJoinTable();
