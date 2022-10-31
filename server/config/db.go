package config

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

func NewConnection(config string) (*sql.DB) { 
	db, err := sql.Open("postgres", config)
	if err != nil {
		log.Fatal(err)
	}

	return db
}
