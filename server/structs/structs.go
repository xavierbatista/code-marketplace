package structs

import "mime/multipart"

type Item struct {
	Id          string   `json:"id"`
	Name        string   `json:"name"`
	Thumbnail   string   `json:"thumbnail"`
	Images      []string `json:"images"`
	Category    string   `json:"category"`
	Tags        []string `json:"tags"`
	Price       float32  `json:"price"`
	CreatorId   string   `json:"creatorId"`
	Files       string   `json:"files"`
	Description string   `json:"description"`
	Rating      float32  `json:"rating"`
	Ratings     int      `json:"ratings"`
	Purchases   int      `json:"purchases"`
	Created     string   `json:"created"`
	Modified    string   `json:"modified"`
}

type ItemCard struct {
	Id        string  `json:"id"`
	Name      string  `json:"name"`
	Thumbnail string  `json:"thumbnail"`
	Category  string  `json:"category"`
	Price     float32 `json:"price"`
}

type Tag struct {
	Name      string     `json:"name"`
	ItemCards []ItemCard `json:"itemCards"`
}

type Category struct {
	TagList []string `json:"tagList"`
	Tags    []Tag    `json:"tags"`
}

type Cart struct {
	CartItems []ItemCard `json:"cartItems"`
	Total     float32    `json:"total"`
}

type Profile struct {
	Purchases []ItemCard `json:"purchases"`
	Creations []ItemCard `json:"creations"`
}

type SubmitCodeForm struct {
	Name        string                `json:"name"`
	Category    string                `json:"category"`
	Tags        []string              `json:"tags"`
	Price       float32               `json:"price"`
	Description string                `json:"description"`
	Thumbnail   *multipart.FileHeader `json:"thumbnail"`
	Images      []*multipart.FileHeader `json:"images"`
	Files       *multipart.FileHeader `json:"files"`
}