package controllers

import (
	"server/services"

	"github.com/gin-gonic/gin"
)

func GetItem(c *gin.Context) {
	item := services.QueryItemsById("1")
	c.JSON(200, item)
}