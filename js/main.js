window.addEventListener('load',()=>{
    $("#botonLoad").remove();
})


function eliminarAuto(e){
    let posicion=productosRegistrados.findIndex(auto=>auto.id == e.target.id)
    delete productosRegistrados[posicion]
    productosRegistrados.splice(posicion,1)
    localStorage.setItem("productosRegistrados", JSON.stringify(productosRegistrados))
}