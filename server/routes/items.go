package routes

import (
	"server/controllers"

	"github.com/gin-gonic/gin"
)

func Items(router *gin.Engine){
	items := router.Group("/items")
	items.GET("/:item-id", controllers.GetItem)
}