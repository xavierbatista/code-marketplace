package main

import (
	"server/config"
	"server/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Use(cors.Default()) //change this later on to only accept request from my website

	config.Init()

	routes.Cart(router)
	routes.Categories(router)
	routes.Items(router)
	routes.Users(router)
	routes.Search(router)
	routes.StartSelling(router)

	// router.Run("127.0.0.1:5000")
	router.Run(":5000")
}