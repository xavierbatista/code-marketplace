package routes

import (
	"server/controllers"

	"github.com/gin-gonic/gin"
)

func StartSelling(router *gin.Engine) {
	startSelling := router.Group("/start-selling")
	startSelling.POST("/", controllers.AddToItems)
}