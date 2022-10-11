package services

import "github.com/COOPSPROFI/NeoPixel/internal/repositories"

type Authorization interface {
}

type Service struct {
	Authorization
}

func NewService(repos *repositories.Repository) *Service {
	return &Service{}
}
