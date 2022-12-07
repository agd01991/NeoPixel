package model

type TodoList struct {
	Id          int    `json:"Id"`
	Title       string `json:"title"`
	Description string `json:"description"`
}
