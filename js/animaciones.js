$("#titulo1").empty();


$("#titulo1").animate({ left:'250px',
                        opacity:'0,5',
                        height:'350px',
                        





}).slideUp(2000).slideDown(3000).animate({left:'100px',
opacity:'1',
height:'40px'
});

$("#titulo1").append("COTIZACION DEL SEGURO DE SU AUTO AL INSTANTE! ").fadeOut(2000)


$("h2").fadeIn();
$('#submits').fadeOut("slow",()=>{
    $('#submits').fadeIn();
});
$('#submits').css("background-color","yellow")

