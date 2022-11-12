package main

import (
	"server/config"
	"server/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	config.Init()
	router := gin.Default()
	router.Use(cors.Default()) // todo - make this only accept request from my website

	routes.Cart(router)
	routes.Categories(router)
	routes.Items(router)
	routes.Users(router)
	routes.Search(router)
	routes.StartSelling(router)

	router.Run(":5000")
}