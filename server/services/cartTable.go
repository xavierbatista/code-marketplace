package services

import (
	"database/sql"
	"server/config"
)

func QueryCartByUserID(userID string) *sql.Rows {
	items, _ := config.DbRead.Query(`SELECT * FROM "cart" WHERE userID == $1`, userID)

	return items
}

func InsertItemIntoCart() {
	config.DbWrite.Exec(`INSERT INTO "cart" ("item", "category", "thumbnail") values($1, $2, $3)`, "test", "test", "test")
}

func DeleteItemFromCart(somethingIdk string){
	config.DbWrite.Exec(`DELETE FROM "cart" WHERE "" == $1`, somethingIdk)
}