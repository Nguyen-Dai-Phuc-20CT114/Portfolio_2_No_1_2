/* Phần cho hiệu ứng quay của menu-box span .nen */
/****************************************************** */
/****************************************************** */
/****************************************************** */

var x = document.getElementsByClassName("nen");

x[3].style.animation = "top_bottom 20s linear infinite";
x[7].style.animation = "top_bottom 20s linear infinite";

x[4].style.animation = "top_left 20s linear infinite";

x[5].style.animation = "left 20s linear infinite";

x[6].style.animation = "bottom_left 20s linear infinite";

x[0].style.animation = "bottom_right 20s linear infinite";

x[1].style.animation = "right 20s linear infinite";

x[2].style.animation = "top_right 20s linear infinite";








/* Phần cho hiệu ứng hover của menu-current */
/****************************************************** */
/****************************************************** */
/****************************************************** */

/* Phần khai báo biến */
/****************************************************** */
var isBig = false


/* Hàm ngăn chặn giặt lag khi hover */
/****************************************************** */
function lonLen(){
    if(isBig === false){

        /* Tăng kích thước của ảnh */
        var x = document.getElementById("menu-current");

        x.style.width = 100 + 'px';
        x.style.height =  100 + 'px';
        x.style.opacity =  1;
        x.style.border = "2px solid rgb(255, 255, 128)";


        /* Tăng kích thước của vùng hover */
        var y = document.getElementById("menu-nen");

        y.style.setProperty("--width_menu_nen", "510px");
        y.style.setProperty("--height_menu_nen", "280px");
        y.style.bottom = 0 + 'px';
        

        /* Kéo thanh menu-box lên */
        var menu_box = document.querySelectorAll('.menu-box');
        menu_box[0].style.setProperty('--menu_box_top', '0px');

        /* Đẩy các ô span ra xung quanh */
        var menu_box_span = document.querySelectorAll(".menu-box span");
        for(var i = 0; i < menu_box_span.length; i++){
            menu_box_span[i].style.setProperty("--translate_Z", "200px");
        }

        /* Hiện các ô đó lên */
        var z = document.getElementsByClassName("nen");
        for(var i = 0; i < z.length; i++){
            z[i].style.opacity = 1;
        }



        isBig = true;
    }
}


/* Hàm ngăn chặn giặt lag khi menu-current trở về bình thường */
function nhoLai(){
    if(isBig === true){
        console.log('ham thu nho')

        /* Giảm kích thước của ảnh */
        var x = document.getElementById("menu-current");

        x.style.width = 70 + 'px';
        x.style.height =  70 + 'px';
    
        x.style.opacity =  0.2;
    



        /* Giảm kích thước của nền */
        var y = document.getElementById("menu-nen");

        y.style.setProperty("--width_menu_nen", "70px");
        y.style.setProperty("--height_menu_nen", "70px");
        y.style.bottom = 20 + 'px';
        

        /* Kéo thanh menu-box lên */
        var menu_box = document.querySelectorAll('.menu-box');
        menu_box[0].style.setProperty('--menu_box_top', '100px');

        /* Đẩy các ô span ra xung quanh */
        var menu_box_span = document.querySelectorAll(".menu-box span");
        for(var i = 0; i < menu_box_span.length; i++){
            menu_box_span[i].style.setProperty("--translate_Z", "0px");
        }

        /* Ẩn các ô menu */
        var z = document.getElementsByClassName("nen");
        for(var i = 0; i < z.length; i++){
            z[i].style.opacity = 0;
        }

        isBig = false;
    }
}








/* Phần di chuyển giữa các trang */
/****************************************************** */
/****************************************************** */
/****************************************************** */

function goToHome(){
    location.href = "../home.html";
}

function goToAbout(){
    location.href = "../about.html";
}

function goToService(){
    location.href = "../service.html";
}

function goToSkills(){
    location.href = "../skills.html";
}

function goToEducation(){
    location.href = "../education.html";
}

function goToExperience(){
    location.href = "../experience.html";
}

function goToWork(){
    location.href = "../work.html";
}

function goToContact(){
    location.href = "../contact.html";
}