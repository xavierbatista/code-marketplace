package controllers

import (
	"server/structs"

	"github.com/gin-gonic/gin"
)

func GetCart(c *gin.Context) {
	cart := structs.Cart {
		CartItems: []structs.ItemCard {
			{
				Id: "1234",
				Name: "name",
				Thumbnail: "/sampleThumbnails/1.png",
				Category: "JavaScript",
				Price: 0.00,
			},
			{
				Id: "1234",
				Name: "name",
				Thumbnail: "/sampleThumbnails/1.png",
				Category: "JavaScript",
				Price: 0.00,
			},
			{
				Id: "1234",
				Name: "name",
				Thumbnail: "/sampleThumbnails/1.png",
				Category: "JavaScript",
				Price: 0.00,
			},
		},
		Total: 0.00,
	}

	// item := structs.Item{}

	// err := c.BindJSON(&item)
	// if (err != nil) {
	// 	log.Fatal(err)
	// }

	c.JSON(200, cart)
}