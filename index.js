import ProductManager from "./ProductManager.js";


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
    let result2 = await inventary.addProduct(newProduct);
    let result3 = await inventary.addProduct(newProduct);
    inventary.getProducts();
    inventary.getProductById(2);
    console.log(result);

}

env();
