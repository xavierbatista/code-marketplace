package config

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

var (
	DbRead *sql.DB
	DbWrite *sql.DB
)

func initDb() {
	if (Env.GO_ENV == "production") {
		// todo - put the production user, password, port, and database in the .env file
		prodConfigRead := fmt.Sprintf("host = %s port = %s user = %s password = %s dbname = %s sslmode = disable", Env.DB_READ_PROD, "5432", "postgres", "password", "code_marketplace")
		prodConfigWrite := fmt.Sprintf("host = %s port = %s user = %s password = %s dbname = %s sslmode = disable", Env.DB_WRITE_PROD, "5432", "postgres", "password", "code_marketplace")

		DbRead = NewConnection(prodConfigRead)
		DbWrite = NewConnection(prodConfigWrite)
	} else {
		devConfig := fmt.Sprintf("host = %s port = %s user = %s password = %s dbname = %s sslmode = disable", "host.docker.internal", "5433", "postgres", "password", "code_marketplace")

		DbRead = NewConnection(devConfig)
		DbWrite = NewConnection(devConfig)
	}
}

func NewConnection(config string) (*sql.DB) { 
	db, err := sql.Open("postgres", config)
	if err != nil {
		log.Panic(err)
	}

	return db
}
