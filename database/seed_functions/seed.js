const faker = require('faker');
const con = require('../index.js');
const data = require('../data/roomData.js');

const getRandomNum = (min, max) => {
  const low = Math.ceil(min);
  const high = Math.floor(max);
  return Math.floor(Math.random() * (high - low)) + low;
};

const getListings = () => {
  const listings = [];
  const { photoUrls } = data;

  for (let i = 0; i < 100; i += 1) {
    const roomName = data.rooms[i];
    const numberOfBeds = getRandomNum(3, 8);
    const pricePerNight = getRandomNum(50, 500);
    const numberOfReviews = getRandomNum(50, 200);
    const randomIndex = getRandomNum(0, 15);
    const photoUrl = photoUrls[randomIndex];

    const listing = [roomName, numberOfBeds, pricePerNight, numberOfReviews, photoUrl];
    listings.push(listing);
  }

  return listings;
};

const seedListings = () => {
  const queryString = 'insert into listings(name, number_of_beds, price_per_night, number_of_reviews, image_url) values ?';
  const queryArgs = getListings();

  con.query(queryString, [queryArgs], (err, results) => {
    console.log(`Added ${results.affectedRows} rows to listings`);
  });
};

const seedJoinTable = () => {
  const queryString = 'insert into listings2listings(listing_id, similar_listing_id) values ?';
  const queryArgs = [];

  for (let i = 1; i < 101; i += 1) {
    queryArgs.push([i, getRandomNum(1, 20)]);
    queryArgs.push([i, getRandomNum(21, 40)]);
    queryArgs.push([i, getRandomNum(41, 60)]);
    queryArgs.push([i, getRandomNum(61, 80)]);
    queryArgs.push([i, getRandomNum(81, 101)]);
  }
  con.query(queryString, [queryArgs], (err, results) => {
    if (err) {
      return console.log(err);
    }
    return console.log(`Added ${results.affectedRows} rows to listings2listings`);
  });
};

seedListings();
seedJoinTable();
