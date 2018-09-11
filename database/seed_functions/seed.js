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

var seedRooms = function() {
  var queryString = 'insert into rooms(name) values ?';
  var queryArgs = data.rooms;

  con.query(queryString, [queryArgs], function(err, results) {
  	if (err) {
      console.log(err)
  	}
    console.log('Added ' + results.affectedRows + ' rows');
  });
}

var getListings = function() {
  var listings = [];
  var photoUrls = data.photoUrls;

  for (var i = 0; i < 10; i++) {
  	var name = faker.random.word();
  	var basicInfo = faker.lorem.sentence();
  	var pricePerNight = getRandomNum(50, 500);
  	var averageRating = getRandomDecimal(3, 5);
  	var randomIndex = getRandomNum(0, 10);
  	var photoUrl = photoUrls[randomIndex];

  	var listing = [name, basicInfo, pricePerNight, averageRating, photoUrl];
  	listings.push(listing)
  }

  return listings;
}

var seedSimilarListings = function() {
  var queryString = 'insert into similar_listings(name, basic_info, price_per_night, average_rating, image_url) values ?';
  var queryArgs = getListings();

  con.query(queryString, [queryArgs], function(err, results) {
  	console.log('Added ' + results.affectedRows + ' rows');
  });
}


