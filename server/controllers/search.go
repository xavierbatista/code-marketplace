package controllers

import (
	"server/structs"

	"github.com/gin-gonic/gin"
)

func GetSearchResults(c *gin.Context) {
	itemCards := []structs.ItemCard {
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
	}

	c.JSON(200, itemCards)
}