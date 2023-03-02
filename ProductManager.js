import fs from 'fs';


export default class ProductManager {
    constructor() {
        this.products = [];
        this.path = "./products.json";
    };

    addProduct = async (newProduct) => {

        if (this.products.length === 0) {
            newProduct.id = 1;
        } else {
            newProduct.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(newProduct);

        await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, "\t"));
        return newProduct;
    };

    getProducts = async () => {

        const dataProducts = await fs.promises.readFile(this.path, "utf-8");
        const result = JSON.parse(dataProducts);
        console.log(result);
        return result;
    };

    getProductById = async (productId) => {

        const dataSearch = await fs.promises.readFile(this.path, "utf-8");
        const result = JSON.parse(dataSearch);
        const searchProduct = result.find((product) => product.id === productId);

        if (!searchProduct) {
            console.log("Not found");
            return;
        }

        console.log(searchProduct.title);
    };


};











