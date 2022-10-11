package main

import (
	"log"

	"github.com/COOPSPROFI/NeoPixel/internal"
	"github.com/COOPSPROFI/NeoPixel/internal/handlers"
	"github.com/COOPSPROFI/NeoPixel/internal/repositories"
	"github.com/COOPSPROFI/NeoPixel/internal/services"
	"github.com/spf13/viper"
)

func main() {
	if err := initConfig(); err != nil {
		log.Fatalf("failed to initialize config.yaml: %s", err.Error())
	}

	repos := repositories.NewRepository()
	services := services.NewService(repos)
	handlers := handlers.NewHandler(services)

	server := new(internal.Server)
	if err := server.Run(viper.GetString("port"), handlers.InitRoutes()); err != nil {
		log.Fatalf("error while running http server: %s", err.Error())
	}
}

func initConfig() error {
	viper.AddConfigPath("configs")
	viper.SetConfigName("config")
	return viper.ReadInConfig()

}
