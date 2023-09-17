import { promises as fs } from "fs"




export default class ProductsManager {
    constructor() {
        this.path = `./src/json/products.json`
    }

    readProducts = async () => {
        try {
            const productjson = await fs.readFile(this.path, `utf-8`)
            return await JSON.parse(productjson)
        } catch (error) {
            return []
        }
    }
    async getProducts() {
        return await this.readProducts(console.log())
    }
   
    

    addProducts = async ({ name, model, price, img, code, category, stock }) => {
        if (!name || !model || !price || !img || !code || !category || !stock) return `Ingrese todos los Campos`

        const product = await this.readProducts()

        const productExiste = product.findIndex(products => products.code === code)

        if (productExiste != -1) return `el código ${code} ya existe`

        let newProduct = {
            name,
            model,
            price,
            img,
            code,
            category,
            stock,
            id: product.length + 1
        }
        product.push(newProduct)
        await fs.writeFile(this.path, JSON.stringify(product, null, 2), `utf-8`)
        return `Producto Ingresado con Exito`

    }
    getProductsById = async (id) => {

        const productId = await this.readProducts()
        if (productId.length === 0) return `Producto no Existe`
        const product = productId.find(product => product.id === id)
        if (!product) return `producto no Encontrado`
        return (product)
    }

    // getProductsLimit = async () =>{
    //     const limit = await this.readProducts()
    //     const productList = limit.slice(0, limit)
    //     const productsLimit = productList
    //     if (!limit) {
    //         return "Cantidad Inexistente"
    //     } else {
    //         return (productsLimit) }
    // }

    deleteProducts = async (id) => {
        const productDelete = await this.readProducts()
        const productexist = productDelete.some(product => product.id === id)
        if (productexist) {
            const productElim = productDelete.filter((product) => product.id != id)
            await fs.writeFile(this.path, JSON.stringify(productElim))
            return `Producto Eliminado`
        }
        return `Producto no Encontrado`
    }

    updateProducts = async (id, product) => {
        await this.deleteProducts(id)
        const productDelete = await this.readProducts()
        const productUpdate = [{ ...product, id }, ...productDelete]
        await fs.writeFile(this.path, JSON.stringify(productUpdate))
        return "Producto modificado con Exito"
        //console.log(productUpdate)


    }

}

const products = new ProductsManager()

// products.updateProducts(
//  {name: `KIT Bomba de Gasolina`, model: `Swin`, price: 30, img: `img6`, code: `1235`, category: `1`, stock: `20`}
//   )  //  .then(res => console.log(res))
//     // .catch(err => console.log(err))

// const respto = (
//         //{name: `KIT Bomba de Gasolina`, model: `Aveo`, price: 5, img: `img1`, code: `1230`, category: `1`, stock: `20` }    
//         // {name: `KIT Bomba de Gasolina`, model: `Lumina`, price: 15, img: `img2`, code: `1231`, category: `1`, stock: `20` }    
//         // {name: `KIT Bomba de Gasolina`, model: `Silverado`, price: 30, img: `img3`, code: `1232`, category: `1`, stock: `20`}
//         // {name: `KIT Bomba de Gasolina`, model: `Spark`, price: 15, img: `img4`, code: `1233`, category: `1`, stock: `20`}
//         // {name: `KIT Bomba de Gasolina`, model: `Spark01`, price: 18, img: `img5`, code: `1234`, category: `1`, stock: `20`}
//         // {name: `KIT Bomba de Gasolina`, model: `Swin`, price: 15, img: `img6`, code: `1235`, category: `1`, stock: `20`}
//         // {name: `KIT Bomba de Gasolina`, model: `Spectrum`, price: 20, img: `img7`, code: `1236`, category: `1`, stock: `20`}
//         // {name: `Filtro de Gasolina`, model: `Optra`, price: 8, img: `img8`, code: `1237`, category:`2`, stock: `20`}
//         // {name: `Filtro de Gasolina`, model: `Corsa`, price: 8, img: `img9`, code: `1238`, category:`2`, stock: `20`}     
//          //{name: `Filtro de Gasolina`, model: `Aveo`, price: 5, img: `img10`, code: `1239`, category:`2`, stock: `20`}     
//         // { name: `Filtro de Gasolina`, model: `LU D-Max`, price: 12, img: `img11`, code: `1240`, category: `2`, stock: `20` }
//         )

// // products.deleteProducts(4)
// // .then(res => console.log(res))

//  products.addProducts(respto)
//    .then(res => console.log(res))
//    .catch(err => console.log(err))



