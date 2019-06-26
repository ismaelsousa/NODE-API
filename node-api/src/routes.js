const express = require("express")
const routes = express.Router()
const ProductConstoller = require("./controllers/ProductController")


//rotas
routes.get("/products", ProductConstoller.index)
routes.get("/products/:id", ProductConstoller.show)
routes.post("/products", ProductConstoller.store)
routes.put("/products/:id", ProductConstoller.update)
routes.delete("/products/:id", ProductConstoller.destroy)

module.exports = routes