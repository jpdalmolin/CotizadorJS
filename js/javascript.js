$("#titulo1").empty();


$("#titulo1").animate({ left:'250px',
                        opacity:'0,5',
                        height:'350px',
                        





}).slideUp(2000).slideDown(3000).animate({left:'100px',
opacity:'1',
height:'40px'
});

$("#titulo1").append("COTIZACION DEL SEGURO DE SU AUTO AL INSTANTE! ").fadeOut(2000)

const productosRegistrados=[];
const autos=[]
const miFormulario = document.getElementById("registroPlan");
    miFormulario.onsubmit=(e)=>{
            console.log(e.target)
            console.log("form enviado")
        e.preventDefault();
        let inputs = e.target.children;
    
  


   // alert("La cotizacion total de su auto es de " +modeloIng+kmsIng)
            console.log(inputs[0].value);
            console.log(inputs[1].value);
            console.log(inputs[2].value);

console.dir($);
    const nuevo = new Auto(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value)

    productosRegistrados.push(nuevo);

    localStorage.setItem("productosRegistrados", JSON.stringify(productosRegistrados))
   
     
     if("productosRegistrados" in localStorage){
         console.log("existen")
         const guardados = JSON.parse(localStorage.getItem("productosRegistrados"))
         console.log(guardados)  
            for(const auto of guardados){
       
             $('#submits').append(`<h2>El auto ${auto.id} (ingresado por Formulario)
             el modelo es ${auto.modelo}
              su marca es ${auto.marca} 
               y sus km son ${auto.km}
              <button id="${auto.id}" class="btn${auto.id}">Quiero este plan</button>
              <button id="${auto.id}" class="btn btn-danger btn-delete">x</button>              
              
              </h2>`);
                $("h2").fadeIn();
                $('#submits').fadeOut("slow",()=>{
                    $('#submits').fadeIn();
                });
                $('#submits').css("background-color","yellow")
          
              botones= $(`.btn${auto.id}`);

              $('.btn-delete').on('click',eliminarAuto);
             
              

             
             
 
 
             for (const boton of botones){
                 boton.onclick=comprarManejador;
             }
             function comprarManejador(){
                 confirmarCompra();
              
                cotizFinal();
             }
             function confirmarCompra(){
                $(`.btn${auto.id}`).hide();
                const URL= "https://jsonplaceholder.typicode.com/posts";
                $.post(URL,JSON.stringify(productosRegistrados), function(datos,estado){
                    console.log(datos)
                    console.log(estado)
                    $('#notificacion').html(`CONFIRMADO ${datos.id}`)
             })
            }

         function calcModelo() {
            auto.modeloReal=auto.modelo;
                
            if(auto.modelo>2010){
               return   auto.modelo=2000
           } else{
               return   auto.modelo=1000
           }
          
         }  
         function calcMarca(){
            auto.marcaReal=auto.marca
            if(auto.marca=="BMW" || auto.marca=="AUDI"||auto.marca=="MERCEDES"){
            return  auto.marca=15000;
             } else if(auto.marca=="FORD"||auto.marca=="RENAULT"||auto.marca=="CITROEN"){
                    return   auto.marca=8000;
                } else{
                    return  auto.marca=3000;
         }}
         function calcKm(){
            auto.kmReal=auto.km
            if(auto.km>200000){
                return   auto.km=500;
            } else if(auto.km>100000){
                return   auto.km=1000
            } else {
                return   auto.km=2000
            }
         }
         function cotizFinal(){
            calcModelo();
            calcMarca();
            calcKm();
            auto.cotizFinal=auto.modelo+auto.marca+auto.km
            $('body').append(`<h3>Usted acepto su plan de Auto ${auto.id}
                 el total a abonar será ${auto.cotizFinal}</h3>`);
                 $('h3').css("background-color","grey")
               
         }
            
         
      

     }}}

/*
     const URLGET ="data/autos.json"
     $.get(URLGET,function(datos,estado){
         if(estado=="success"){
             for(const literal of datos){
                 autos.push(new Auto(literal.id,literal.modelo,literal.marca,literal.kilometros))
 
             }
         }
         console.log(autos)
         autosUI(autos,'#productosContenedor')
     })
*/