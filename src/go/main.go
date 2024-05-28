package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/render"
)

type ApiResponse struct {
	Message string `json:"message"`
}

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello Chi & Go!"))
	})
	r.Get("/api", func(w http.ResponseWriter, r *http.Request) {
		render.JSON(w, r, ApiResponse{Message: "Hello from the Go API!"})
	})
	http.ListenAndServe(":3000", r)
}
