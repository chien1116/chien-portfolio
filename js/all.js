document.addEventListener("DOMContentLoaded",function(){ 
    //nav滾動
    $(".scroll-nav").click(function (e) {
        e.preventDefault(); 
        // 獲取目標 ID
        let targetId = $(this).attr("href"); 
        //console.log(targetId); 得到#id名稱
        $("html, body").animate(
            {
            // 滾動到目標的頂部位置(上方偏移量80px)
              scrollTop: $(targetId).offset().top -40, 
            },
            1000
          );
    })


    //header樣式變化(高度/顏色)
    let header = document.querySelector(".header");
    let lastScrollY = 0;
    window.addEventListener("scroll", function () {
        let currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) { 
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
        //儲存目前的滾動位置
        lastScrollY = currentScrollY; 
    });

    //header bar點擊打開
    var isBarOpen = false; // 初始狀態是關閉 
    $(".header_bar").click(function(){
        if(!isBarOpen){ //打開
            $(".header_menu_list").css("bottom","-280px");
            isBarOpen = true; //將狀態改為true
        }else{ //關閉
            $(".header_menu_list").css("bottom","100px");
            isBarOpen = false; //將狀態改為true
        }  
    })
    
    
    //收合清單
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