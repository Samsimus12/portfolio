package main

import (
	"github.com/fatih/color"
	"github.com/labstack/echo"
)

func main() {
	color.Green("Starting Server...")
	e := echo.New()
	e.Static("/", "")
	e.Logger.Fatal(e.Start(":8080"))
}
