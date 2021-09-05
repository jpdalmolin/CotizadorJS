
window.addEventListener('load',()=>{
    $("#botonLoad").remove();
})

// esta funcion me convierte la marca a mayuscula siempre.
$(function() {
    $('input').focusout(function() {
        // Uppercase-ize contents
        this.value = this.value.toLocaleUpperCase();
    });
});
