import fs from 'fs';

export default class ProductManager {
    constructor() {
        this.products = [];
        this.path = "./products.json";
    };

    existProduct = async () => {

        if (fs.existsSync(this.path)) {
            const data = await fs.promises.readFile(this.path, "utf-8");
            const result = JSON.parse(data);
            console.log(result);
            return result;
        } else {
            return [];
        }
    };


    addProduct = async (newProduct) => {

        const products = await this.existProduct();

        if (products.length === 0) {
            newProduct.id = 1;
        } else {
            newProduct.id = products[products.length - 1].id + 1;
        }

        products.push(newProduct);

        await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));
        return newProduct;
    };

    getProducts = async () => {

        const dataProducts = await fs.promises.readFile(this.path, "utf-8");
        let result = JSON.parse(dataProducts);
        //console.log(result);
        return result;
    }

    getProductById = async (productId) => {

        const dataSearch = await fs.promises.readFile(this.path, "utf-8");
        const result = JSON.parse(dataSearch);
        const searchProduct = result.find((item) => item.id === productId);

        if (!searchProduct) {
            console.log("Not found")
            return;
        }

        console.log(searchProduct.title)

    };

    updateProduct = async (productId, prop, newValue) => {

        const products = await this.existProduct();

        let position = products.find(index => index.id === productId);

        position[prop] = newValue;
        console.log(position);

        await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));

        return products;
    }


    deleteProduct = async (productId) => {

        const products = await this.existProduct();

        let position = products.find(index => index.id === productId);

        products.splice(position, 1);

        await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));

        return products;

    }







};












