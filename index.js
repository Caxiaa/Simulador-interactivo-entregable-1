let products = [];

const addProduct = ()=>{
    let new_product = prompt("Ingrese un nuevo producto:");
        if(new_product == ""){
            return alert("No puedes ingresar un producto vacio. Intente nuevamente");
        }else{
            for(let i=0;i<products.length;i++){
                if(products[i] == new_product){
                    return alert("Este producto ya fue ingresado.");
                }
            }
            products.push(new_product);
            return alert("Producto ingresado correctamente");
        }
}

const getProduct = ()=>{
    if(products.length == 0){
        return alert("Todavia no se ingreso ningun producto.")
    }
    return alert(products);
}

let ingreso;
do {
    ingreso = prompt(" Ingrese 1 para agregar productos\n Ingrese 2 para ver los productos\n Ingrese 0 para salir.");
    switch(ingreso){
        case "1":
            addProduct();
            break;
        case "2":
            getProduct();
            break;
        case "0":
            alert("Saliste del sistema.")
            break;
    }
} while (ingreso != 0);
