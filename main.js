//BASE DE DATOS...
const Hamburguesas = [
     {
         nombre: 'Clasica',
         precio: 1300,
         cantidad: 1
     },
     {
         nombre: 'Premium',
         precio: 1100, 
         cantidad: 1
     },
     {
         nombre: 'Especial',
         precio: 1450,   
         cantidad: 1  
     }
 ];

const Bebidas = [
     {
         nombre: 'COCA',
         precio: 300, 
         cantidad: 1
     },
     {
         nombre: 'SPRITE',
         precio: 300,   
         cantidad: 1
     },
     {
         nombre: 'CERVEZA',
         precio: 400,   
         cantidad: 1     
     }
 ];

const Postres = [
     {

         nombre: 'HELADO',
         precio: 450,
         cantidad: 1
        
     },
     {
         nombre: 'MOUSE',
         precio: 600,
         cantidad: 1
         
     },
     {
         nombre: 'BANANA SPLIT',
         precio: 450,
         cantidad: 1
        
     }
 ];



 let carrito = [];
 let precioFinal=0;

 //todavia debo agregar la opcion de subir y bajar cantidades con botones dentro del HTML(proximo a hacer)
 // debo pasar la informacion a JSON para conservar la informacion(me quede sin tiempo)
 // tambien mostrar los datos del carrito dentro del HTML.

//hamburguesas 

 let buttonHclasica = document.getElementById("botonHclasica");


 buttonHclasica.addEventListener("click",cliqueado=>{
     carrito.push(Hamburguesas[0]);
     precioFinal+=(Hamburguesas[0].precio);
     console.log(carrito);
     console.log(`Precio final de la compra es ${precioFinal}`);
 });

 let buttonHpremium = document.getElementById("botonHpremium");
 buttonHpremium.addEventListener("click",cliqueado =>{
     carrito.push(Hamburguesas[1]);
     precioFinal+=Hamburguesas[1].precio;
     console.log(carrito);
     console.log(`Precio final de la compra es ${precioFinal}`);
 });

 let buttonHespecial = document.getElementById("Especial");
 buttonHpremium.addEventListener("click",cliqueado =>{
     carrito.push(Hamburguesas[2]);
     precioFinal+=Hamburguesas[2].precio;
     console.log(carrito);
     console.log(`Precio final de la compra es ${precioFinal}`);
 });




 //bebidas




 let buttonBcoca = document.getElementById("botonBcoca");

 buttonBcoca.addEventListener("click",cliqueado =>{
     carrito.push(Bebidas[0]);
     precioFinal+=Bebidas[0].precio;
     console.log(carrito);
     console.log(`Precio final de la compra es ${precioFinal}`);

 });
 let buttonBsprite = document.getElementById("botonBsprite");
 buttonBsprite.addEventListener("click",cliqueado =>{
     carrito.push(Bebidas[1]);
     precioFinal+=Bebidas[1].precio;
     console.log(carrito);
     console.log(`Precio final de la compra es ${precioFinal}`);
 });
 let buttonBcerveza = document.getElementById("botonBcerveza");
 buttonBcerveza.addEventListener("click",cliqueado =>{
     carrito.push(Bebidas[2]);
     precioFinal+=Bebidas[2].precio;
     console.log(carrito);
     console.log(`Precio final de la compra es ${precioFinal}`);

});



 //postres





 let buttonPhelado = document.getElementById("botonPhelado");
 buttonPhelado.addEventListener("click",cliqueado =>{
     carrito.push(Postres[0]);
     precioFinal+=Postres[0].precio;
     console.log(carrito);
     console.log(`Precio final de la compra es ${precioFinal}`);
    });

 let buttonPmouse = document.getElementById("botonPmouse");
 buttonPmouse.addEventListener("click",cliqueado =>{
     carrito.push(Postres[1]);
     precioFinal+=Postres[1].precio;
     console.log(carrito);
     console.log(`Precio final de la compra es ${precioFinal}`);

    });  
 let buttonPbananaSplit = document.getElementById("botonPbananaSplit");
 buttonPbananaSplit.addEventListener("click",cliqueado =>{
     carrito.push(Postres[2]);
     precioFinal+=Postres[2].precio;
     console.log(carrito);
     console.log(`Precio final de la compra es ${precioFinal}`);
    });

