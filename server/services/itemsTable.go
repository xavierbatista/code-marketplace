package services

import (
	"log"
	"server/config"
	"server/structs"
)

// todo - don't use log.Fatal because it crashes the program

func QueryItemsForItemCards(category string, tag string) []structs.ItemCard {
	rows, err := config.Db.Query(`SELECT id, name, thumbnail, category, tag, price FROM items WHERE category = $1 AND tag = $2 ORDER BY purchases LIMIT 4`, category, tag)
	if (err != nil) {
		log.Fatal(err)
	}

	itemCards := []structs.ItemCard{}

	for rows.Next() {
		itemCard := structs.ItemCard{}

		err := rows.Scan(&itemCard.Id, &itemCard.Name, &itemCard.Thumbnail, &itemCard.Thumbnail, &itemCard.Category, &itemCard.Price)
		if err != nil {
			log.Fatal(err)
		}

		itemCards = append(itemCards, itemCard)
	}

	return itemCards
}

func QueryItemsById(id string) structs.Item {
	item := structs.Item{}

	row := config.Db.QueryRow(`SELECT * FROM items WHERE id = $1`, id)
	err := row.Scan(&item.Id, &item.Name, &item.Thumbnail, &item.Category, &item.Price, &item.CreatorId, &item.Files, &item.Description, &item.Rating, &item.Ratings, &item.Purchases, &item.Created, &item.Modified)
	if (err != nil) {
		log.Fatal(err)
	}

	return item
}

func InsertIntoItems(name string, thumbnail string, category string, price float32, creatorId string, files string, description string) {
	_, err := config.Db.Exec(`INSERT INTO items (name, thumbnail, category, price, creator_Id, files, description) VALUES ($1, $2, $3, $4, $5, $6, $7)`, name, thumbnail, category, price, creatorId, files, description)
	if (err != nil) {
		log.Fatal(err)
	}
}