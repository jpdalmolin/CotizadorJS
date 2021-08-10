let titulo1=document.getElementById("titulo1");
titulo1.innerHTML="COTIZACION DEL SEGURO DE SU AUTO AL INSTANTE! ";

const productosRegistrados=[];

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


    const nuevo = new Auto(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value)

    productosRegistrados.push(nuevo);

    localStorage.setItem("productosRegistrados", JSON.stringify(productosRegistrados))
   
     
     if("productosRegistrados" in localStorage){
         console.log("existen")
         const guardados = JSON.parse(localStorage.getItem("productosRegistrados"))
         console.log(guardados)  
            for(const auto of guardados){
       
             let divAuto= document.createElement("div");
             divAuto.innerHTML+=`<h2>El auto ${auto.id} (ingresado por Formulario)
             el modelo es ${auto.modelo}
              su marca es ${auto.marca} 
               y sus km son ${auto.km}
              <button id="${auto.id}" class="btnCompra">Quiero este plan</button></h2>`;
             document.body.appendChild(divAuto);
             const botones= document.getElementsByClassName("btnCompra");
 
 
             for (const boton of botones){
                 boton.addEventListener('click',comprarManejador)
             }
             function comprarManejador(){
                 
              
                cotizFinal();
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
            let divCot= document.createElement("div")
                 divCot.innerHTML=`<h2>Usted acepto su plan de Auto ${auto.id}
                 el total a abonar será ${auto.cotizFinal}</h2>`;
                 document.body.appendChild(divCot);
               
         }
            
      

     }}}
