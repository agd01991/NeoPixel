package handler

import (
	"github.com/COOPSPROFI/NeoPixel/internal/service"
	"github.com/gin-gonic/gin"
)

type Handler struct {
	service *service.Service
}

func NewHandler(services *service.Service) *Handler {
	return &Handler{service: services}
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
		todos := api.Group("/todos", h.userIdentity)
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
