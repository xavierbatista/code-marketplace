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
}

func initEnv() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal(err)
	}

	env := env{}
	env.GO_ENV = os.Getenv("GO_ENV")
	env.GOOGLE_APPLICATION_CREDENTIALS = os.Getenv("GOOGLE_APPLICATION_CREDENTIALS")

	Env = &env
}