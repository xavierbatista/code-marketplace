package config

import (
	"database/sql"
	"fmt"

	"firebase.google.com/go/v4/auth"
)

var (
	Env *env
	AuthClient *auth.Client
	Db *sql.DB
)

func Init() {
	Env = NewEnv()
	AuthClient = NewAuthClient()
	
	devConfig := fmt.Sprintf("host = %s port = %s user = %s password = %s dbname = %s sslmode = disable", Env.PG_HOST, Env.PG_PORT, Env.PG_USER, Env.PG_PASSWORD, Env.PG_DATABASE)
	Db = NewConnection(devConfig)
}