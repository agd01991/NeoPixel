package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *Handler) Login(c *gin.Context) {

}

func (h *Handler) Register(c *gin.Context) {

}

func (h *Handler) getBaseData(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, "Message: Home Page")
}
