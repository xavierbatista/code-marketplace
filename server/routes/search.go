package routes

import (
	"server/controllers"

	"github.com/gin-gonic/gin"
)

func Search(router *gin.Engine) {
	search := router.Group("/search")
	search.GET("/", controllers.GetSearchResults)
}