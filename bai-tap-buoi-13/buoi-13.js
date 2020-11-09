document.write("1. Viết hàm kiểm tra 2 số, trả về số lớn hơn.");
document.writeln("<br>");
document.writeln(
  "Nhập vào <strong>kiemTra2So</strong> >> sau đó nhập 2 số >> VD: kiemTra2So(1,2)"
);
document.write("<br><br>");

function kiemTra2So(so1, so2) {
  if (so1 > so2) {
    return "Số lớn hơn là " + so1;
  } else {
    return "Số lớn hơn là " + so2;
  }
}

document.write("2. Viết hàm tính n! (giai thừa) với n là số nguyên dương.");
document.writeln("<br>");
document.writeln(
  "Nhập vào <strong>tinhGiaiThua</strong> >> sau đó nhập một số >> VD: tinhGiaiThua(3)"
);
document.write("<br><br>");

function tinhGiaiThua(n) {
  var giaithua = 1;
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      giaithua = giaithua * i;
    }
    return "Giai thừa của " + n + " là " + giaithua;
  } else if (n == 0) {
    return giaithua;
  } else {
    return "không hợp lệ";
  }
}

document.write(
  "3. Viết hàm lấy ra một mảng các số chẵn từ mảng ban đầu và trả về mảng đã được sắp xếp giảm dần."
);
document.writeln("<br>");
document.writeln(
  "Nhập vào <strong>mangSoChan</strong> >> sau đó nhập một chuỗi số >> VD: mangSoChan([1,2,3,4,5,6,7])"
);
document.write("<br><br>");

function mangSoChan(array) {
  let soChan = array.filter((number) => number % 2 == 0);
  return "Mảng các số chẵn sau khi sắp xếp giảm dần là " + soChan.reverse();
}

document.write(
  "4. Viết hàm lấy ra ngày tháng năm hiện tại, xác định đang là mùa nào trong năm."
);
document.write("<br>");
document.writeln("Nhập vào <strong>getSeason()</strong> ");
document.write("<br><br>");

function getSeason() {
  let season = "";
  var d = new Date();
  var date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  switch (d.getMonth()) {
    case 1:
    case 2:
    case 3:
      season = " là mùa xuân";
      break;
    case 4:
    case 5:
    case 6:
      season = " là mùa hè";
      break;
    case 7:
    case 8:
    case 9:
      season = " là mùa thu";
      break;
    case 10:
    case 11:
    case 12:
      season = " là mùa đông";
      break;
  }
  return `${date}${season}`;
}

document.write(
  "5. Cho một mảng các chuỗi, viết hàm sắp xếp mảng theo thứ thự bảng chữ cái"
);
document.write("<br>");
document.writeln(
  "Nhập vào <strong>mangChuCai</strong> >> sau đó nhập một chuỗi chữ cái >> VD: mangChuCai('qwertyui')"
);
document.write("<br><br>");

function mangChuCai(letter) {
  let newLetter = [];
  return (newLetter = letter.split("").sort().join(""));
}

document.write("6. Viết hàm đảo ngược một chuỗi từ một chuỗi cho trước.");
document.write("<br>");
document.writeln(
  "Nhập vào <strong>mangReverse()</strong> >> sau đó nhập một chuỗi số >> VD: stringReverse('abcdefgh')"
);
document.write("<br><br>");

function stringReverse(string) {
  let newString = [];
  return `Chuỗi sau khi đảo ngược là: ${(newString = string
    .split("")
    .reverse()
    .join(""))}`;
}

// function bai6(string){
//   var newstring=""
//   for(var i=string.length-1;i>=0;i--){
//       newstring +=string[i]
//       if()
//   }
//   return newstring
// }

document.write(
  "7. Cho một số nguyên dương N, viết hàm kiểm tra N có phải là số nguyên tố."
);
document.write("<br>");
document.writeln(
  "Nhập vào <strong>soNguyenTo(n)</strong> >> n là một số >> VD: soNguyenTo(3)"
);
document.write("<br><br>");

function soNguyenTo(n) {
  var flag = false;
  if (n < 2) {
    flag = false;
  } else if (n == 2 || n == 3) {
    return true;
  } else if (n == 2) {
    flag = true;
  } else if (n % 2 == 0) {
    flag = false;
  } else {
    for (var i = 4; i < n - 1; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
  }
  if (flag == true) {
    return `${n} là số nguyên tố`;
  } else {
    return `${n} không là số nguyên tố`;
  }
}

document.write(
  "8. Cho một số nguyên dương N, viết hàm in ra màn hình những số hoàn hảo nhỏ hơn N (số hoàn hảo là số bằng tổng các ước số của nó mà không kể chính nó)."
);
document.write("<br>");
document.writeln(
  "Nhập vào <strong>soHoanHao(n)</strong> >> n là một số >> VD: soHoanHao(10000)"
);
document.write("<br><br>");

function soHoanHao(max) {
  function uoc(num) {
    var array = [];
    for (var i = 1; i < num; i++) {
      if (num % i == 0) {
        array.push(i);
      }
    }
    return array;
  }

  function sum(nums) {
    var result = 0;
    for (var i in nums) {
      result += nums[i];
    }
    return result;
  }

  for (var i = 1; i < max; i++) {
    if (sum(uoc(i)) == i) {
      console.log(i);
    }
  }
}

document.write(
  "9. Viết chương trình vẽ một hình chữ nhật bằng các dấu * với chiều rộng và chiều cao cho trước (chiều rộng, chiều cao lớn hơn 1)."
);
document.write("<br>");
document.writeln(
  "Nhập vào <strong>chuNhat()</strong> >> sau đó nhập chiều rộng và chiều cao >> VD: chuNhat(5,5)"
);
document.write("<br><br>");

function chuNhat(rong, cao) {
  var draw = "";
  for (var i = 0; i < rong; i++) {
    if (rong > 1 || cao > 1) {
      for (var j = 0; j < cao; j++) {
        draw += "*";
      }
      draw += "<br/>";
    } else {
      return "Chiều rộng và chiều cao phải lớn hơn 1";
    }
  }
  document.write(draw);
}

document.write(
  "10. Viết chương trình vẽ một tam giác cân bằng các dấu * với chiều cao cho trước (chiều cao lớn hơn 1)."
);
document.write("<br>");
document.writeln(
  "Nhập vào <strong>tamGiac()</strong> >> sau đó nhập chiều cao >> VD: tamGiac(5)"
);
document.write("<br><br>");

// function tamGiac(cao) {
//   for (let i = 1; i <= cao; i++) {
//     if (cao > 1) {
//       let str = " ".repeat(cao - i);
//       let str2 = "*".repeat(i * 2 - 1);
//       document.write(str + str2 + str);
//     } else {
//       return "Chiều cao nhập vào phải lớn hơn 1";
//     }
//   }
// }

// function tamGiac(cao) {
//   var y = ((2 * cao) - 1);
//   for (let i = 0; i < cao; i++) {
//     if (cao > 1) {
//       for (let j = 0; j < y; j++) {
//         if (i <= j && j >= y - i - 1) {
//           document.write("*");
//         } else {
//           document.write(" ");
//         }

//       }
//       document.write("<br/>");
//     } else {
//       return "Chiều cao nhập vào phải lớn hơn 1";
//     }
//   }
// }

// function tamGiac(h) {
//   for (let i = 1; i <= h; i++) {
//     for (let j = i; j < h; j++) {
//       document.write(" ");
//     }

//     for (j = 1; j <= (2 *h-1); j++) {
//       document.write("* ");
//     }
//     document.write("<br/>");
//   }
// }

function tamGiacCan(h) {
  var str = "";
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < 2 * h - 1; j++) {
      if (j >= h - 1 - i && j <= h - 1 + i) {
        str += "*";
      } else {
        str += "&nbsp&nbsp";
      }
    }
    str += "<br />";
  }

  document.writeln(str);
}
