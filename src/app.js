import ProductManager from "./ProductManager.js";

import express from "express";


const inventary = new ProductManager();

const env = async () => {

    const newProduct = {

        code: "abc123",
        title: "leche",
        description: "producto prueba",
        price: 20,
        thumbnail: "sin imagen",
        stock: 25
    }

    /* let result = await inventary.addProduct(newProduct);
    console.log(result);
    let consult = await inventary.getProducts();
    console.log(consult);
    let consult2 = await inventary.getProductById(1); 
    let consult3 = await inventary.updateProduct(1, 'title', 'gaseosa');
    /* let consult4 = await inventary.deleteProduct(2); */

}

env();


const app = express();

const envGet = async () => {

    const data = await inventary.existProduct();
    /* 
        app.get("/products", (req, res) => {
    
            res.send(data);
        });*/


    app.get("/products", (req, res) => {

        const limit = req.query.limit;

        if (limit === 0) return res.send(data);
        const result = data.slice(0, limit);
        res.send(result);

    })


    app.get("/:pid", (req, res) => {

        let pid = req.params.pid;
        let product = data.find((item) => item.id === pid);

        if (!product) {
            res.send({ error: "Producto no encontrado" })
        } else {
            res.send(product);
        }
    })


    app.listen(3005, () => {
        console.log("Servidor arriba en el puerto 8080")
    });
}

envGet(); 
