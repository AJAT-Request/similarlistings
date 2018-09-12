DROP database IF EXISTS airbnb;

CREATE database airbnb;

USE airbnb;

CREATE table listings (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  basic_info VARCHAR(150),
  price_per_night INT,
  average_rating DECIMAL(2, 1),
  image_url VARCHAR(150),
  PRIMARY KEY(id) 
);

CREATE table listings2listings (
  similar_listing_id INT,
  listing_id INT,
  FOREIGN KEY (similar_listing_id) REFERENCES listings(id),
  FOREIGN KEY (listing_id) REFERENCES listings(id),
  PRIMARY KEY (listing_id, similar_listing_id)
);


