package config

import (
	"database/sql"
	"fmt"
)

var (
	Db *sql.DB
)

func Init() {
	initEnv()
	initAuthClient()
	
	devConfig := fmt.Sprintf("host = %s port = %s user = %s password = %s dbname = %s sslmode = disable", Env.PG_HOST, Env.PG_PORT, Env.PG_USER, Env.PG_PASSWORD, Env.PG_DATABASE)
	prodConfig := "prod config here"

	if (Env.GO_ENV == "production") {
		Db = NewConnection(prodConfig)
	} else {
		Db = NewConnection(devConfig)
	}
}