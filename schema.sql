DROP database IF EXISTS airbnb;

CREATE database airbnb;

USE airbnb;

CREATE table rooms (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  PRIMARY KEY(id)
);

CREATE table similar_listings (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  basic_info VARCHAR(150),
  price_per_night INT,
  average_rating DECIMAL(2, 1),
  image_url VARCHAR(150),
  PRIMARY KEY(id) 
);

CREATE table rooms2similar_listings (
  room_id INT NOT NULL,
  similar_listing_id INT NOT NULL,
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  FOREIGN KEY (similar_listing_id) REFERENCES similar_listings(id),
  PRIMARY KEY rooms2similar_listing(room_id, similar_listing_id)
)
