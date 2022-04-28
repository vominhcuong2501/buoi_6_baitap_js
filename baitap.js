/**
 * Bài tập 1
 * tong = 0, i = 0 => tong = 1 , i = 1
 * tong = 1, i = 1 => tong = 3 , i = 2
 * 
 */
document.getElementById("xuat").onclick = function() {
    var tong = 0; 
    var i = 0;
    while( tong < 10000) {
        tong += i + 1;
        i++;
    }
     document.getElementById("thongbao").innerHTML = "Số nguyên dương nhỏ nhất là "+ i;
  }


/**
 * Bài tập 2
 * x = 2, n = 4
 * count = 1, count <= n, tong = 2
 * count = 2, count <= n, tong = 6
 * count = 3, count <= n, tong = 14
 * count = 4, count <= n, tong = 30
 */
// Cách 1
document.getElementById("tinhTong").onclick = function() {
    var x = document.getElementById("nhapSoX").value*1;
    var n = document.getElementById("nhapSoN").value*1;
    var tong= 0;
    for(count = 1; count <= n; count++) {
        tong += Math.pow(x,count);
    }
    document.getElementById("thongbao1").innerHTML = "Tổng là "+ tong;
}

// Cách 2
// function sum(x, n) {
//     var x = document.getElementById("nhapSoX").value*1;
//     var n = document.getElementById("nhapSoN").value*1;
//     var result = 0;
//     for (var i = 1; i <= n; i++) {
//       result += x ** i;
//     }
//     return result;
//   }
//   document.getElementById("tinhTong").onclick = function() {
//     var result = sum();
//   document.getElementById("thongbao1").innerHTML = "Tổng là "+ result;
//   }


/**
 * Bài tập 3
 * soNhap = 5
 * i = 1, i < soNhap, tich = 1, i = 2
 * i = 2, i < soNhap, tich = 2, i = 3
 * i = 3, i < soNhap, tich = 6, i = 4
 * i = 4, i < soNhap, tich = 24, i = 5
 * i = 5, i = soNhap, tich = 120, i = 6
 * i = 6, false => stop
 */
document.getElementById("tinhTongLuyThua").onclick = function() {
    var soNhap = document.getElementById("nhapso").value*1;
    var tich = 1;
    for(i = 1; i <= soNhap; i++) {
        tich = tich * i;
        }
    document.getElementById("thongbao2").innerHTML = "Tổng là "+ tich;
}




/**
 * Bài tập 4
 * 
 */
document.getElementById("xuat10Dong").onclick = function() {
    var nhap = document.getElementById("xuat10cau").value*1;
    var ketqua = "";
    var i = 1;
    while( i <= nhap) {
        if(i % 2 == 0) {
            ketqua += "<div style = 'background-color:red; color:white'> Số chẵn : " + i + "</div>";
            i++;
        } else {
            ketqua += "<div style = 'background-color:blue; color:white'> Số lẻ : " + i + "</div>";
            i++;
        }
    }
  document.getElementById("thongbao3").innerHTML = ketqua;
}

/**
 * Bài tập 5
 */
document.getElementById("inso").onclick = function() {
    var songuyen = document.getElementById("songuyen").value*1;
    var result = "";
    for(var i = 1; i < songuyen; i++) {
        result += i + " ";
    }
    document.getElementById("thongbao5").innerHTML = result;
}