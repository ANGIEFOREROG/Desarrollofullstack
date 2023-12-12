class ProductManager {
    constructor() {
        this.products = [];
        this.path='';
    }
    setPath(path){
        this.path = path;
    }
    getPath(){
        return this.path;
    }
    

    getProducts() {
        // Devuelve una copia ordenada de la lista actual
        return [...this.products].sort((a, b) => a.id - b.id);
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

    updateProduct(productId, updatedFields) {
        const productIndex = this.products.findIndex((prod) => prod.id === productId);

        if (productIndex === -1) {
            return 'No existe ese producto';
        }

        // Guardar el ID antes de actualizar el producto
        const originalId = this.products[productIndex].id;

        // Actualizar solo los campos permitidos
        const updatedProduct = { ...this.products[productIndex], ...updatedFields };

        // Restaurar el ID original para asegurarse de que no se cambie
        updatedProduct.id = originalId;

        // Reemplazar el producto original con el actualizado
        this.products[productIndex] = updatedProduct;

        return 'Producto actualizado correctamente';
    }

    deleteProduct(productId) {
        const initialLength = this.products.length;
        this.products = this.products.filter((prod) => prod.id !== productId);

        if (initialLength === this.products.length) {
            return 'No existe ese producto';
        }

        return 'Producto eliminado correctamente';
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

// Ejemplo de uso del método updateProduct
console.log(products.updateProduct(1, { price: 28000, stock: 20 }));
console.log(products.getProducts());
console.log(products.getProductById(1));

// Ejemplo de uso del método deleteProduct
console.log(products.deleteProduct(2));
console.log(products.getProducts());
console.log(products.getProductById(1));
