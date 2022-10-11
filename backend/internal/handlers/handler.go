package handlers

import (
	"github.com/COOPSPROFI/NeoPixel/internal/services"
	"github.com/gin-gonic/gin"
)

type Handler struct {
	services *services.Service
}

func NewHandler(services *services.Service) *Handler {
	return &Handler{services: services}
}

func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.Default()

	api := router.Group("/api")
	{
		auth := api.Group("/auth")
		{
			auth.POST("/login", h.Login)
			auth.POST("/register", h.Register)
		}
		todos := api.Group("/todos")
		{
			todos.GET("/", h.getAllTodos)
			todos.POST("/", h.createTodo)
			todos.GET("/:id", h.getTodoById)
			todos.PUT("/:id", h.updateTodo)
			todos.DELETE("/:id", h.deleteTodo)
		}
		api.GET("/", h.getBaseData)
	}

	return router
}
