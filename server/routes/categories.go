package routes

import (
	"server/controllers"

	"github.com/gin-gonic/gin"
)

func Categories(router *gin.Engine){
	categories := router.Group("/categories")
	categories.GET("/category-name", controllers.GetCategory)
}