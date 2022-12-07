package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *Handler) getAllTodos(c *gin.Context) {
	id, _ := c.Get(userCtx)
	c.JSON(http.StatusOK, map[string]interface{}{
		"id": id,
	})
}

func (h *Handler) getTodoById(c *gin.Context) {

}

func (h *Handler) createTodo(c *gin.Context) {

}

func (h *Handler) updateTodo(c *gin.Context) {

}

func (h *Handler) deleteTodo(c *gin.Context) {

}
