const con = require ('../index.js');
const rooms = require('../data/roomData.js');
const faker = require('faker');

// const similiarListings = ['cabin', 'castle', 'cool house', 
// 'glass house', 'grass house', 'hut', 'igloo', 'nice house', 
// 'nicer house', 'rick and morty\'s house'];

var seedRooms = function(rooms) {
  var queryString = 'insert into rooms(name) values(?)';
  var queryArgs = rooms;

  con.query(queryString, [queryArgs], function(err, results) {
    console.log(results);
  });

}

var seedSimilarListings = function(similiarListings) {
  
}

seedRooms(rooms);

