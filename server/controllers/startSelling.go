package controllers

import (
	"server/structs"
	"strconv"

	"github.com/gin-gonic/gin"
)

func AddToItems(c *gin.Context) {
	form := structs.SubmitCodeForm{}
	parsedForm, _ := c.MultipartForm()
	
	form.Name = parsedForm.Value["name"][0]
	form.Category = parsedForm.Value["category"][0]
	form.Tags = parsedForm.Value["tags"]
	price, _ := strconv.ParseFloat(parsedForm.Value["price"][0], 32)
	form.Price = float32(price)
	form.Description = parsedForm.Value["description"][0]
	form.Thumbnail = parsedForm.File["thumbnail"][0]
	form.Images = parsedForm.File["images"]
	form.Files = parsedForm.File["files"][0]

	//need to figure out how to store thumbnail and images in S3 and get back link

	// services.InsertIntoItems(form.Name, form.Thumbnail, form.Category, form.Price, "5", form.Files, form.Description)
	c.JSON(200, form)
}