import express from "express"
import cartsRouter from "./router/carts.router.js"
import productRouter from "./router/product.router.js"

const app = express()

const PORT = 8080



app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/carts", cartsRouter)
app.use("/api/products", productRouter) 






app.listen(8080, ()=> console.log(`Escuchando en el Puerto ${PORT}`))