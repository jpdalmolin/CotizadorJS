// SUBMIT FORMULARIO
const miFormulario = document.getElementById("registroPlan");
    miFormulario.onsubmit=(e)=>{
        e.preventDefault();
        let inputs = e.target.children;
        $(`#registroPlan`).hide();


    const nuevo = new Auto(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value)

    productosRegistrados.push(nuevo);

    localStorage.setItem("productosRegistrados", JSON.stringify(productosRegistrados))
   
   //me devuelve los productos del local storage.
     if("productosRegistrados" in localStorage){
         const guardados = JSON.parse(localStorage.getItem("productosRegistrados"))

         // ESTE GUARDADOS ID SERA EL ID DEL PRODUCTO GUARDADO EN LS
            for(const auto of guardados){
                    // POR CADA INGRESO MANDAME ESTO
       
             $('#submits').append(`<h2>El auto ${auto.id} (ingresado por Formulario)
             el modelo es ${auto.modelo}
              su marca es ${auto.marca} 
               y sus km son ${auto.km}
              <button id="${auto.id}" class="btn${auto.id}">Quiero este plan</button>
              <button id="${auto.id}" class="btn btn-danger btn-delete">x</button>              
              
              </h2>`);
               
              botones= $(`.btn${auto.id}`);

              $('.btn-delete').on('click',eliminarAuto);
             
             for (const boton of botones){
                 boton.onclick=comprarManejador;
             }
             function comprarManejador(e){
                 e.preventDefault();
                 confirmarCompra();
                cotizFinal();
             }

             //confirma la compra por POST
             function confirmarCompra(){
                $(`.btn${auto.id}`).hide(); 
                const URL= "https://jsonplaceholder.typicode.com/posts";
                $.post(URL,JSON.stringify(productosRegistrados), function(datos,estado){
                    $('#notificacion').html(`PLAN CONFIRMADO ${datos.id}`)
             })
            }
                //CALCULA EL MODELO DEL AUTO INGRESADO
         function calcModelo() {
            auto.modeloReal=auto.modelo;
    
            if(auto.modelo>2010){
               return   auto.modelo=2000
           } else{
               return   auto.modelo=1000
           }
          
         }  
         //CALCULA MARCA
         function calcMarca(){
            auto.marcaReal=auto.marca
            if(auto.marca=="BMW" || auto.marca=="AUDI"||auto.marca=="MERCEDES"){
            return  auto.marca=15000;
             } else if(auto.marca=="FORD"||auto.marca=="RENAULT"||auto.marca=="CITROEN"){
                    return   auto.marca=8000;
                } else{
                    return  auto.marca=3000;
         }}

         //CALCULA KMS
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
         //CALCULA COTIZ FINAL
         function cotizFinal(){
            calcModelo();
            calcMarca();
            calcKm();
            auto.cotizFinal=auto.modelo+auto.marca+auto.km
            $('#plan').append(`<h3>Usted acepto su plan de Auto ${auto.id}
                 el total a abonar será ${auto.cotizFinal}</h3>`);
                 $('h3').css("background-color","grey")
        
         }
        
// ESTA FUNCION HACE QUE EL ID NO REPITA AL ANTERIOR
             $(`#inputId`).on('change',noId)
                function noId(){
             if(inputs[0].value == guardados[0].id)  {
               $('#Bcotizar').hide()
               $('#errorId').append("este id ya esta en uso")
             }else {
                    $('#Bcotizar').show()
                    $('#errorId').empty()
               }
            }
                  //me pone todos los inputs en empty
            function submitForm() {               
            $('#registroPlan')[0].reset(); // Reset all form data
               return false; // Prevent page refresh
             }  
             // ELIMINAR BOTON COTIZAR 
             $(`#Bcotizar`).on('click',eliminarCotizar());

               function eliminarCotizar(){
                  $(`#Bcotizar`).hide();
                  $('#whenCotiz').append(`<h2>Termino su cotizacion, cuando elimine su plan podra realizar otra</h2>`);
                  submitForm()
               }
               //ELIMINA EL AUTO
               function eliminarAuto(e){
                let posicion=productosRegistrados.findIndex(auto=>auto.id = e.target.id)
                $(`#Bcotizar`).show();
                $(`#registroPlan`).show();
                $('#notificacion').empty();
             $('h2').empty();
              $('#plan').empty();
                productosRegistrados.splice(posicion,1)
            }

     }}}
