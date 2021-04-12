function taoSoNgauNhien(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}


/* Phần background */
/**************************************************** */
/**************************************************** */
/**************************************************** */

var taoSao = false;

if(taoSao === false){
    
    /* Phần lấy giá trị thuộc tính từ css */
    /**************************************************** */


    /* Lây phần tử root */
    var r_home = document.querySelector(':root');
    console.log('Đã lấy phần tử root');

    /* Hàm lây các styles trong root */
    function getPropertyValueOf(property){
        var rs_home = getComputedStyle(r_home);
        console.log('Đã lấy các styles trong root');
        return rs_home.getPropertyValue(property);
    }

    /* Hàm đặt style trong root */
    function setPropertyValueOf(property, value){
        r_home.style.setProperty(property, value);
    }



    /* Phần tạo sao */
    /***************************************************** */


    /* Hàm tạo sao */
    function multiple_box_shadow(n){
        var value = taoSoNgauNhien(0, 2000) + 'px' + ' ';
        value += taoSoNgauNhien(0, 2000) + 'px' + ' ';
        value += '#FFF';
        // alert('Đã khởi tạo value: ' + value);
        
        for(let i = 2; i <= n; i++){
            value += ', ';
            value += taoSoNgauNhien(0, 2000) + 'px' + ' ';
            value += taoSoNgauNhien(0, 2000) + 'px' + ' ';
            value += '#FFF';
            // alert('Đã đặt value lần thứ ' + i + ', value = ' + value);
        }

        return value;
    }

    /* Tạo sao */
    setPropertyValueOf('--shadow-small', multiple_box_shadow(700));
    setPropertyValueOf('--shadow-medium', multiple_box_shadow(200));
    setPropertyValueOf('--shadow-big', multiple_box_shadow(100));

    taoSao = true;
}

