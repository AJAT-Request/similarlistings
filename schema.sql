DROP database IF EXISTS Rooms;

CREATE database Rooms;

USE Rooms;

CREATE table Listings (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  basicInfo VARCHAR(150),
  pricePerNight INT,
  averageRating DECIMAL(2, 1),
  imageUrl VARCHAR(150),
  PRIMARY KEY(id) 
);

CREATE table SimilarListings (
  listing_id INT NOT NULL,
  similar_listing_id INT NOT NULL,
  FOREIGN KEY (listing_id) REFERENCES Listings(id),
  FOREIGN KEY (similar_listing_id) REFERENCES Listings(id),
  PRIMARY KEY listing2listing(listing_id, similar_listing_id)
)