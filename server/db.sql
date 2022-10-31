CREATE DATABASE code_marketplace

CREATE TABLE items (
  id BIGSERIAL PRIMARY KEY, -- change bigserial to UUID
  name VARCHAR(100) NOT NULL,
  thumbnail VARCHAR(2048) NOT NULL,
  category VARCHAR(50) NOT NULL,
  price DECIMAL(6,2) NOT NULL,
  creator_id VARCHAR(40) NOT NULL,
  files VARCHAR(2048) NOT NULL,
  description VARCHAR(5000) NOT NULL DEFAULT '',
  rating DECIMAL(3,2) NOT NULL DEFAULT 5.00,
  ratings INT NOT NULL DEFAULT(0),
  purchases INT NOT NULL DEFAULT(0),
  created date NOT NULL DEFAULT NOW(),
  modified date NOT NULL DEFAULT NOW()
);

CREATE TABLE item_tags (
  item_id BIGSERIAL NOT NULL,
  tag VARCHAR(25) NOT NULL,
  PRIMARY KEY (item_id, tag),
  FOREIGN KEY (item_id) REFERENCES items(id)
);

CREATE TABLE item_images (
  item_id BIGSERIAL NOT NULL,
  image VARCHAR(2048) NOT NULL,
  PRIMARY KEY (item_id, image),
  FOREIGN KEY (item_id) REFERENCES items(id)
);

CREATE TABLE cart (
  item_id BIGSERIAL NOT NULL,
  user_id VARCHAR(40) NOT NULL,
  PRIMARY KEY (item_id, user_id),
  FOREIGN KEY (item_id) REFERENCES items(id)
);

DROP TABLE cart;
DROP TABLE item_tags;
DROP TABLE item_images;
DROP TABLE items;

-- todo - index columns

INSERT INTO items (name, thumbnail, category, price, creator_id, files, description) VALUES ('Cool code stuff', '/sampleThumbnails/1.png', 'JavaScript', 0.00, 'EO9GHFEWA98FAHasdf9h', 'awss3dotcom/files', 'fun coding stuff');