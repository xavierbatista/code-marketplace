package middleware

import (
	"server/config"

	"github.com/gin-gonic/gin"
)

var authClient = config.AuthClient

func VerifyToken(c *gin.Context) {
	// token, err := authClient.VerifyIDTokenAndCheckRevoked(context.Background(), c.body.something)
	// if (err != nil) {
	// 	log.Print(err)
	// }

	// if(time.Now().Unix() >= token.Expires){
	// 	log.Print("EXPIREDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")
	// }else {
	// 	log.Print("NOTTTTTTTTTTTTT EXPIREDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")
	// }

	c.Next()
}