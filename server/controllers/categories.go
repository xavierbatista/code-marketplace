package controllers

import (
	"server/structs"

	"github.com/gin-gonic/gin"
)

func GetCategory(c *gin.Context) {
	tagList := []string {
		"Template",
		"Game",
		"Tag",
		"Tag",
		"Tag",
		"Tag",
		"Tag",
		"Tag",
		"Tag",
		"Tag",
		"Tag",
		"Tag",
		"Tag",
		"Tag",
		"Tag",
		"Tag",
		"Tag",
		"Tag",
		"Tag",
		"Tag",
	}
	
	// categoryName := "JavaScript"
	// gameItemCards := services.QueryItemsForItemCardsByCategoryAndTag(categoryName, "Game")
	// templateItemCards := services.QueryItemsForItemCardsByCategoryAndTag(categoryName, "Template")

	tags := []structs.Tag {
		{
			Name: "Game",
			ItemCards: []structs.ItemCard {
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
			},
		},
		{
			Name: "Template",
			ItemCards: []structs.ItemCard {
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
			},
		},
	}

	var category = structs.Category {
		TagList: tagList,
		Tags: tags,
	}

	c.JSON(200, category)
}