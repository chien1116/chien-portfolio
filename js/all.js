document.addEventListener("DOMContentLoaded",function(){ 

    $(".tools .title_sm").click(function(){
        $(this).siblings("p").slideToggle(500);
    })
    $(".methods .title_sm").click(function(){
        $(this).siblings("ol").slideToggle(500);
    })
    $(".job .fa-chevron-down").click(function(){
        $(this).closest(".job").find("ol").slideToggle(500);
    })
    
})