package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type env struct {
	PG_HOST string
	PG_PORT string
	PG_USER string
	PG_PASSWORD string
	PG_DATABASE string
	GOOGLE_APPLICATION_CREDENTIALS string
}

// todo - check for errors when getting variables
func NewEnv() (*env) {
	err := godotenv.Load()
	if err != nil {
		log.Fatal(err)
	}

	env := env{}
	env.PG_HOST = os.Getenv("PG_HOST")
	env.PG_PORT = os.Getenv("PG_PORT")
	env.PG_USER = os.Getenv("PG_USER")
	env.PG_PASSWORD = os.Getenv("PG_PASSWORD")
	env.PG_DATABASE = os.Getenv("PG_DATABASE")
	env.GOOGLE_APPLICATION_CREDENTIALS = os.Getenv("GOOGLE_APPLICATION_CREDENTIALS")

	return &env
}