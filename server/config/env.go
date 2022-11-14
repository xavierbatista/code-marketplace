package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

var Env *env

type env struct {
	GO_ENV string
	GOOGLE_APPLICATION_CREDENTIALS string
	DB_READ_PROD string
	DB_WRITE_PROD string
}

func initEnv() {
	err := godotenv.Load()
	if err != nil {
		log.Panic(err)
	}

	env := env{}
	env.GO_ENV = os.Getenv("GO_ENV")
	env.GOOGLE_APPLICATION_CREDENTIALS = os.Getenv("GOOGLE_APPLICATION_CREDENTIALS")
	env.DB_READ_PROD = os.Getenv("DB_READ_PROD")
	env.DB_WRITE_PROD = os.Getenv("DB_WRITE_PROD")

	Env = &env
}