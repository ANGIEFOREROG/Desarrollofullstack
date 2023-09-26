document.body.onload=function(){
this.cargarCarrito();
}

function cargarCarrito(){
    let listadoProductos = JSON.parse(localStorage.getItem("productos"));

    if (localStorage){
        if(localStorage.getItem('productos') !== undefined && localStorage.getItem('productos')){

            console.log(listadoProductos);

            let tabla = '<table class="table">';
            tabla += '<thead><tr><th scope="col">#</th><th scope="col">producto</th><th scope="col">valor sin iva</th>' + 
                    '<th scope="col">iva</th><th scope="col">Cantidad</th><th scope="col">Total</th></tr></thead><tbody>';

            let totalCompra = 0;
            for (producto of listadoProductos) {
                tabla += '<tr><th scope="row">'+producto.id +'</th>';
                tabla += '<td>'+producto.producto+'</td>';
                tabla += '<td>'+producto.valor * 0.81+'</td>';
                tabla += '<td>'+producto.valor * 0.19+'</td>';
                tabla += '<td>'+producto.cantidad+'</td>';
                tabla += '<td>'+producto.valor * producto.cantidad+'</td>';

                totalCompra = totalCompra + (producto.valor * producto.cantidad);

            }
            tabla +='<tr></tr><td colspan="4"></td><td >Valor Total</td><td>'+totalCompra+'</td></tr>';
            tabla += '</tbody></table>';       
            document.getElementById('tablaCarrito').innerHTML=tabla;


        } 
    }
}