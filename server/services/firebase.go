package services

import (
	"log"
	"server/config"

	"firebase.google.com/go/v4/auth"
	"github.com/gin-gonic/gin"
)

var authClient = config.AuthClient // might cause errors idk

func GetUserByEmail(c *gin.Context) (*auth.UserRecord) {
	user, err := authClient.GetUserByEmail(c, c.GetHeader("email"))
	if (err != nil) {
		log.Panic(err)
	}

	return user
}