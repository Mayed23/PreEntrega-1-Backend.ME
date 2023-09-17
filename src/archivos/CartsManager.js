import { promises as fs } from "fs"
import ProductsManager from "./ProductsManager.js"




export default class CartsManager {
    constructor() {
        this.path = `./src/json/carts.json`
    }
    readCarts = async () => {
        try {
            const cartsJson = await fs.readFile(this.path, `utf-8`)
            return await JSON.parse(cartsJson)
        } catch (error) {
            return []
        }
    }
    async getCarts() {
        return await this.readCarts(console.log())
    }
    exist = async (cid) => {
        const carts = await this.readCarts()
        return carts.find(cart => cart.cid === cid)
    }

    addCarts = async () => {

        const carts = await this.readCarts()
        const cid = carts.length + 1
        let newCart = [{cid:cid, products : []}, ...carts]
      
        await fs.writeFile(this.path, JSON.stringify(newCart))
        return ("Producto Agregado")
       
        }
        getCartsById = async (cid) => {
        
            let cartId = await this.exist(cid)
            if(!cartId) return ("Carrito no encontrado")
            return (cartId)
        }

        addProductToCart = async (cartId, productId)=>{
            const cart = await tehis.exist(cartId)
            if(!cart) return "Carrito no encontrado"
            const product = await productId.readProduct(productId)
            if(!product) return "Producto no encontrado"

            const cartList = await this.readCarts()
            const cartFilter = cartList.filter ((carts)=> carts.cid != cid)
            if(cart.products.some((product)=> product.id === productId)){
                const addProd = cart.products.find((product) => product.id === productId)
                addProd .quantity ++
                const newCartList = [cart, ...cartFilter]
                await this.writeFile(this.path, JSON.stringify(newCartList))
                return "Se añadió producto al carrito"

            }

        cart.products.push({id:productId, quantity:1})
        const newCartList = [cart, ...cartFilter]
        await this.writeFile(this.path, JSON.stringify(newCartList))
        return "Product en el carrito"
    }
}

