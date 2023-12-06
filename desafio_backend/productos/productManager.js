class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(product) {
        if (
            !product.title ||
            !product.description ||
            !product.price ||
            !product.thumbail ||
            !product.code ||
            !product.stock
        ) {
            return 'Ingrese los datos completos';
        }

        const result = this.products.find((prod) => prod.code === product.code);

        if (result) {
            return 'Ya existe el producto con el código';
        }

        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products.length + 1;
        }

        this.products.push(product);
        return 'Producto se encuentra en el inventario';
    }

    getProductById(pid) {
        const result = this.products.find((prod) => prod.id === pid);

        if (!result) {
            return 'No existe ese producto';
        }

        return result;
    }
}

const products = new ProductManager();
console.log(
    products.addProduct({
        title: 'Cuadro caricaturas',
        description: 'Hermoso cuadro de caricaturas',
        price: 26000,
        thumbail: 'imagen',
        stock: '15',
        code: 'abc01',
    })
);
console.log(
    products.addProduct({
        title: 'Cuadro personalizado',
        description: 'Personaliza tu cuadro a tu estilo',
        price: 45000,
        thumbail: 'imagen',
        stock: '30',
        code: 'abc02',
    })
);
console.log(products.getProducts());
console.log(products.getProductById(1));

