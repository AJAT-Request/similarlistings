const con = require ('../index.js');
const data = require('../data/roomData.js');
const faker = require('faker');

// ----------------- Math Helper Functions ------------------ //

var getRandomNum = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var getRandomDecimal = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return ((Math.random() * (max - min)) + min).toFixed(1);
}

// --------------------------------------------------------- //


var getListings = function() {
  var listings = [];
  var photoUrls = data.photoUrls;

  for (var i = 0; i < 100; i++) {
    var roomName = data.rooms[i];
    var basicInfo = faker.lorem.sentence();
    var pricePerNight = getRandomNum(50, 500);
    var averageRating = getRandomDecimal(3, 5);
    var randomIndex = getRandomNum(0, 10);
    var photoUrl = photoUrls[randomIndex];

    var listing = [roomName, basicInfo, pricePerNight, averageRating, photoUrl];
    listings.push(listing)
  }

  return listings;
}

var seedListings = function() {
  var queryString = 'insert into listings(name, basic_info, price_per_night, average_rating, image_url) values ?';
  var queryArgs = getListings();

  con.query(queryString, [queryArgs], function(err, results) {
  	console.log('Added ' + results.affectedRows + ' rows to listings');
  });

}

var seedJoinTable = function() {
  var queryString = 'insert into listings2listings(listing_id, similar_listing_id) values ?';
  var queryArgs = [];

  for (var i = 1; i < 101; i++) {
    var randomSimilarListing = getRandomNum(1, 11);
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





