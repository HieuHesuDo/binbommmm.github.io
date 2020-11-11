document.write("1. Đếm số nguyên tố trong đoạn [a, b].");
document.writeln("<br>");
document.writeln(
  "Nhập vào <strong>demSo(a,b)</strong> >> sau đó nhập 2 số >> VD: demSo(1,100)"
);
document.write("<br><br>");

function soNguyenTo(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function demSo(a, b) {
  var arrs = [];
  for (var i = a; i <= b; i++) {
    if (soNguyenTo(i)) {
      arrs.push(i);
    }
  }
  console.log(arrs);
}

document.write(
  "2. Hiển thị số ngày của tháng. Với tháng 2 có 29 ngày nếu là năm nhuận, 28 ngày nếu là năm không nhuận."
);
document.writeln("<br>");
document.writeln(
  "Nhập vào <strong>dayInMonth(month, year))</strong> >> sau đó nhập tháng và năm >> VD: dayInMonth(11,2020)"
);
document.write("<br><br>");

function namNhuan(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function dayInMonth(month, year) {
  if (month <= 12 && month > 0) {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return `Tháng ${month} năm ${year} có ${31} ngày`;
      case 4:
      case 6:
      case 9:
      case 11:
        return `Tháng ${month} năm ${year} có ${30} ngày`;
      case 2:
        if (namNhuan(year) == true) {
          return `Tháng ${month} năm ${year} có ${29} ngày`;
        } else {
          return `Tháng ${month} năm ${year} có ${28} ngày`;
        }
    }
  } else {
    return "Ngày không hợp lệ, 1 năm chỉ có 12 tháng thôi";
  }
}

document.write(
  "4. Chèn phần tử có giá trị X vào phía sau phần tử có giá trị lớn nhất trong mảng."
);
document.writeln("<br>");
document.writeln(
  "Nhập vào <strong>demSo(a,b)</strong> >> sau đó nhập 2 số >> VD: demSo(1,100)"
);
document.write("<br><br>");

function addElement(arr, x) {
  let maxValue = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }
  let indexMaxValue = arr.indexOf(maxValue);
  arr.splice(indexMaxValue + 1, 0, x);
  return arr;
}

document.write(
  "5. Chèn phần tử có giá trị X vào mảng sao cho mảng vẫn có thứ tự tăng dần."
);
document.writeln("<br>");
document.writeln(
  "Nhập vào <strong>addNewElement(arr, x))</strong> >> VD: addNewElement([21,3,-1,43,5,-2], 10)"
);
document.write("<br><br>");

function addNewElement(arr, x) {
  arr.push(x);
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr;
}

document.write("6. Tính tổng các chữ số trong 1 số nguyên dương.");
document.writeln("<br>");
document.writeln(
  "Nhập vào <strong>tinhTong(n)</strong> >> sau đó nhập 1 số >> VD: tinhTong(1234)"
);
document.write("<br><br>");

function tinhTong(n) {
  let sum = 0;
  while (n) {
    digit = n % 10;
    sum += digit;
    n = (n - digit) / 10;
  }
  return `Tổng các chữ số là ${sum}`;
}

document.write("7. Kiểm tra tính đối xứng của một số nguyên.");
document.writeln("<br>");
document.writeln(
  "Nhập vào <strong>soDoiXung(num)</strong> >> sau đó nhập 1 số >> VD: soDoiXung(1991)"
);
document.write("<br><br>");

function soDoiXung(num) {
  var copyNum = num;
  var reverse = 0;

  //reverse a number
  while (copyNum != 0) {
    reverse = reverse * 10;
    reverse = reverse + (copyNum % 10);
    copyNum = Math.floor(copyNum / 10);
  }
  if (num == reverse) {
    return `${num} là số đối xứng`;
  } else {
    return `${num} không là số đối xứng`;
  }
}

document.write("8. Giải phương trình bậc 2: ax^2 + bx + c = 0.");
document.writeln("<br>");
document.writeln(
  "Nhập vào <strong>phuongTrinh(a, b, c)</strong> >> sau đó nhập a,b,c >> VD: phuongTrinh(2,4,5)"
);
document.write("<br><br>");

function phuongTrinh(a, b, c) {
  if (a == 0) {
    if (b == 0) {
      return "Phương trình vô nghiệm";
    } else {
      return `Phương trình có 1 nghiệm x = ${-c / b}`;
    }
  }
  var delta = b * b - 4 * a * c;
  var x1;
  var x2;
  if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Phương trình có 2 nghiệm là x1: ${x1} và x2: ${x2}`);
  } else if (delta == 0) {
    x1 = -b / (2 * a);
    console.log(`Phương trình có nghiệm kép x1 = x2 = ${x1}`);
  } else {
    console.log(`Phương trình vô nghiệm`);
  }
}

document.write("9. Vẽ hình chữ nhật rỗng kích thước m, n:");
document.writeln("<br>");
document.writeln(
  "Nhập vào <strong>chuNhatRong(n, m)</strong> >> sau đó nhập a,b,c >> VD: chuNhatRong(5,5) "
);
document.write("<br><br>");

function chuNhatRong(n, m) {
  var i, j;
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= m; j++) {
      if (i == 1 || i == n || j == 1 || j == m) {
        document.write("*");
        document.write("&nbsp");
      } else {
        document.write("&nbsp;&nbsp;&nbsp");
      }
    }
    document.write("<br/>");
  }
}

document.write("10. Vẽ tam giác vuông chiều cao h:");
document.writeln("<br>");
document.writeln(
  "Nhập vào <strong>tamGiacVuong(h)</strong> >> sau đó nhập chiều cao >> VD: tamGiacVuong(5)"
);
document.write("<br><br>");

function tamGiacVuong(h) {
  var i, j;
  for (i = 1; i <= h; i++) {
    for (j = 1; j <= i; j++) document.write("*");
    document.write("<br>");
  }
}

document.write("11. Vẽ tam giác cân ngược:");
document.writeln("<br>");
document.writeln(
  "Nhập vào <strong>tamGiacVuong(h)</strong> >> sau đó nhập chiều cao >> VD: tamGiacVuong(5)"
);
document.write("<br><br>");

function tamGiacNguoc(h) {
  var i, j, k;
  for (i = h; i >= 1; i--) {
    for (j = i; j < h; j++) document.write("&nbsp;&nbsp;");
    for (k = i * 2; k > 1; k--) document.write("*");
    document.write("<br>");
  }
}

document.writeln(
  "12. Viết chương trình vẽ một chữ X bằng các dấu * với chiều cao nhập từ bàn phím (chiều cao lớn hơn 0 và là số lẻ)"
);
document.writeln("<br>");
document.writeln(
  "Nhập vào <strong>veX(h)</strong> >> sau đó nhập chiều cao >> VD: veX(5)"
);
document.write("<br><br>");

function veX(h) {
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < h; j++) {
      if (j == i || j == h - i - 1) {
        document.write("*");
      } else {
        document.write("&nbsp");
      }
    }
    document.write("<br/>");
  }
}
