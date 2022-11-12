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
	
	devConfig := fmt.Sprintf("host = %s port = %s user = %s password = %s dbname = %s sslmode = disable", "host.docker.internal", "5433", "postgres", "password", "code_marketplace")
	prodConfig := "prod config here"

	if (Env.GO_ENV == "production") {
		Db = NewConnection(prodConfig)
	} else {
		Db = NewConnection(devConfig)
	}
}