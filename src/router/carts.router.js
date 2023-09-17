import { Router } from "express";
import CartsManager from "../archivos/CartsManager.js";

const cartsRouter = Router()

const carts = new CartsManager()


cartsRouter.post ("/", async (req, res)=>{
    res.send(await carts.addCarts())
})

cartsRouter.get("/", async (req, res) =>{

    res.send(await carts.readCarts())
})

cartsRouter.get ("/:cid", async (req, res)=>{
    res.send(await carts.getCartsById(req.params.cid))
})

cartsRouter.post(`/:cid/products/:pid`, async (req,res)=>{
    let cartId = req.params.cid
    let productId = req.params.pid
    res.send(await CartsManagerartsManager.addToCart(cartId, productId))
}) 

export default cartsRouter