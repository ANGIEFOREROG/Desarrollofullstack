function agregarcarrito(id, nombreArticulo,valorArticulo){

    if (localStorage){ // condicion para saber si tenemos creado algo en cache

        if(localStorage.getItem('productos') !== undefined && localStorage.getItem('productos')){
            let listadoProductos = JSON.parse(localStorage.getItem("productos"));
            
            let siExiste = false;
            for (producto of listadoProductos) {
                if (producto.id == id){
                    siExiste = true;
                    cantidadTemporal = producto.cantidad + 1;
                    producto.cantidad = cantidadTemporal;
                }
            }
            if (siExiste == false){
                listadoProductos.push({ id: id, producto: nombreArticulo, valor: valorArticulo, cantidad:1 });
                localStorage.setItem('productos', JSON.stringify(listadoProductos));
            }
            // se realiza el localStorage//
            localStorage.setItem('productos', JSON.stringify(listadoProductos));
        } else { // si existe el local storage pero no tiene productos, agrego el producto
            const  productos = [{ id: id, producto: nombreArticulo, valor: valorArticulo, cantidad:1 }];
            localStorage.setItem('productos', JSON.stringify(productos));
        }
    } else { // no existe el localstorage lo creo
        const  productos = [{ id: id, producto: nombreArticulo, valor: valorArticulo, cantidad:1 }];
        localStorage.setItem('productos', JSON.stringify(productos));
    }
    alert("Se agrego el producto al carrito");
}
