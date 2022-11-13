package services

import (
	"database/sql"
	"server/config"
)

// todo - don't use log.Fatal because it crashes the program

func QueryCartByUserID(userID string) *sql.Rows {
	items, _ := config.Db.Query(`SELECT * FROM "cart" WHERE userID == $1`, userID)

	return items
}

func InsertItemIntoCart() {
	config.Db.Exec(`INSERT INTO "cart" ("item", "category", "thumbnail") values($1, $2, $3)`, "test", "test", "test")
}

func DeleteItemFromCart(somethingIdk string){
	config.Db.Exec(`DELETE FROM "cart" WHERE "" == $1`, somethingIdk)
}