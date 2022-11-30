package config

import (
	"context"
	"log"

	firebase "firebase.google.com/go/v4"
	"firebase.google.com/go/v4/auth"
)

var AuthClient *auth.Client

//todo - make this connect to the dev firebase db or the prod firebase db
func initAuthClient() {
	app, err := firebase.NewApp(context.Background(), nil)
	if err != nil {
		log.Panic(err)
	}

	authClient, err := app.Auth(context.Background())
	if err != nil {
		log.Panic(err)
	}
	
	AuthClient = authClient
}