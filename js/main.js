window.addEventListener('load',()=>{
    $("#botonLoad").remove();
})


function eliminarAuto(e){
    let posicion=productosRegistrados.findIndex(auto=>auto.id == e.target.id)
    delete productosRegistrados[posicion]
    productosRegistrados.splice(posicion,1)
    localStorage.setItem("productosRegistrados", JSON.stringify(productosRegistrados))
}

function autosUI(autos, id){
    $(id).empty();
    for (const auto of autos) {
       $(id).append(`<div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${auto.modelo}</h5>
                        <p class="card-text">${auto.marca}</p>
                        <span class="badge badge-info">${auto.km}</span>
                        <a href="#" id='${auto.id}' class="btn btn-primary btn-compra">COMPRAR</a>
                      </div>
                    </div>`);
    }

  }