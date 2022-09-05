$("#button1").on("click",function(){
    $("#box").animate({height:"+=20px",width:"+=20px"},"fast");
})

$("#button2").on("click",function(){
    $("#box").css("background-color", "#0000FF");
})

$("#button3").on("click",function(){
    $("#box").css("opacity", ".2")
})

$("#button4").on("click",function(){
    $("#box").css("background-color", '#FFA500');
    $("#box").animate({height: "150px", width: "150px", margin: "25px", opacity: "1"})

})