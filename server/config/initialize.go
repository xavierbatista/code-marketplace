package config

import (
	"database/sql"
	"fmt"
)

var (
	DbRead *sql.DB
	DbWrite *sql.DB
)

func Init() {
	initEnv()
	initAuthClient()
	
	devConfig := fmt.Sprintf("host = %s port = %s user = %s password = %s dbname = %s sslmode = disable", "host.docker.internal", "5433", "postgres", "password", "code_marketplace")
	prodConfigRead := fmt.Sprintf("host = %s port = %s user = %s password = %s dbname = %s sslmode = disable", Env.DB_READ_PROD, "5432", "postgres", "password", "code_marketplace")
	prodConfigWrite := fmt.Sprintf("host = %s port = %s user = %s password = %s dbname = %s sslmode = disable", Env.DB_WRITE_PROD, "5432", "postgres", "password", "code_marketplace")

	if (Env.GO_ENV == "production") {
		DbRead = NewConnection(prodConfigRead)
		DbWrite = NewConnection(prodConfigWrite)
	} else {
		DbRead = NewConnection(devConfig)
		DbWrite = NewConnection(devConfig)
	}
}