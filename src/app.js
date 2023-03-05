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

    let result = await inventary.addProduct(newProduct);
    console.log(result);
    let consult = await inventary.getProducts();
    console.log(consult);
    let consult2 = await inventary.getProductById(1);


    let consult3 = await inventary.updateProduct(2, 'title', 'gaseosa');

    let consult4 = await inventary.deleteProduct(1);

}

env();

/* 
const app = express();

const products = inventary.existProduct();


app.get("/", (req, res) => {

    res.send({ products: [] });
});

app.listen(3005, () => {
    console.log("Servidor arriba en el puerto 8080")
}); */