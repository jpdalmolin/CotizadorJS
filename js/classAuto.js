class Auto{
    constructor(id,modelo,marca,km,marcaReal,modeloReal,kmReal,cotizFinal,cantidad){
    this.id=parseInt(id);
    this.modelo=modelo; 
    this.marca=marca;
    this.km=km;
    this.marcaReal=marcaReal
    this.modeloReal=modeloReal
    this.kmReal=kmReal
    this.cotizFinal=cotizFinal
    this.cantidad=cantidad;

    }
  
    /*
    cotizarMod(){
        
        this.modelo=parseInt(prompt("ingrese modelo " ))
    
        this.modeloReal=this.modelo
        
            if(this.modelo>2010){
                return   this.modelo=2000
            } else{
                return   this.modelo=1000
            }
           
          //Metodo, usuario ingresa modelo para ser cotizado
          
    }
    cotizarMar(){

        this.marca=prompt((("ingrese marca " )))
        this.marca=this.marca.toString();
        this.marca=this.marca.toUpperCase();
        this.marcaReal=this.marca
        if(this.marca=="BMW" || this.marca=="AUDI"||this.marca=="MERCEDES"){
        return  this.marca=15000;
         } else if(this.marca=="FORD"||this.marca=="RENAULT"||this.marca=="CITROEN"){
                return   this.marca=8000;
            } else{
                return  this.marca=3000;
            //Metodo, usuario ingresa marca para ser cotizado
        }}
    cotizarKm(){
        this.km=parseInt(prompt("ingrese km "))
      
        this.kmReal=this.km
        if(this.km>200000){
            return   this.km=500;
        } else if(this.km>100000){
            return   this.km=1000
        } else {
            return   this.km=2000
        }
         //Metodo, usuario ingresa KMs para ser cotizado
    }
    cotizacionFinal(){

        alert("Hola Auto "+this.id+ " tu cotizacion final sera por ser " +this.marcaReal+ " de " +this.marca + ", por su modelo " +this.modeloReal+" sera " +this.modelo+ " y por tener "+this.kmReal+" kilometros " +this.km )
       this.cotizFinal=this.modelo+this.marca+this.km
       alert("Su cotizacion final es " +this.cotizFinal)

         //Metodo,cotiza el auto sumando todo lo ingresado.
           
    }
*/
}