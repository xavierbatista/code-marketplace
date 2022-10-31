package routes

import (
	"server/controllers"

	"github.com/gin-gonic/gin"
)

func Users(router *gin.Engine){
	users := router.Group("/users")
	// https://www.youtube.com/watch?v=xJ8ryXFobGA&list=PL8-bdB4cHmXynirCIPtW0G5mCnaoMfr5u&index=1
	// users.GET("/:user-id", controllers.GetUser)
	users.GET("/user-id", controllers.GetUser)
}