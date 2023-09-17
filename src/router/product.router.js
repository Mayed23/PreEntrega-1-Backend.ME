import { Router } from "express";
import ProductsManager from "../archivos/ProductsManager.js";

const productRouter = Router()
const products = new ProductsManager()



productRouter.get("/", async (req, res) =>{

    res.send(await products.readProducts())
})

productRouter.get("/:id", async (req, res) =>{

    const id = parseInt (req.params.id)
    res.send(await products.getProductsById(id))
})
productRouter.get("/", async (req, res) =>{

    const limt = req.query.id
    const productsLimit =  req.body
    res.send(await products.getProductsLimit(limt))
    console.log(productsLimit)
})


productRouter.post("/", async (req, res)=>{
    const newProducts = req.body
    res.send(await products.addProducts(newProducts))
})

productRouter.delete("/:id", async (req,res)=>{
    const id = req.params.id
    const productElim = req.body
    res.send(await products.deleteProducts(id, productElim))
})

productRouter.put("/:id", async(req, res)=>{
    const id = req.params.id
    const productUpdate = req.body
    res.send(await products.updateProducts(id, productUpdate))

})





export default productRouter