package routes

import (
	"server/controllers"

	"github.com/gin-gonic/gin"
)

func Cart(router *gin.Engine){
	cart := router.Group("/cart")
	cart.GET("/", controllers.GetCart)
}