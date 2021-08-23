
window.addEventListener('load',()=>{
    $("#botonLoad").remove();
})



// me recarga toda la pagina para hacer un nuevo ingreso.
const reload = document.getElementById('reload');

reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    
    $(`#Bcotizar`).show();

});
// esta funcion me convierte la marca a mayuscula siempre.
$(function() {
    $('input').focusout(function() {
        // Uppercase-ize contents
        this.value = this.value.toLocaleUpperCase();
    });
});