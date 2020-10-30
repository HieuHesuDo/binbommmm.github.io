document.write(
  "1.  Cho một mảng số nguyên. Viết hàm kiểm tra nếu trong mảng có phần tử âm thì thay thế nó bằng 0."
);
document.writeln("<br>");
document.writeln("Nhập vào <strong>kiemTraAm</strong> >> sau đó nhập một chuỗi số >> VD: kiemTraAm([1,2,3,4,5,-6,7,8,-9])");
document.writeln("<br><br>");

function kiemTraAm(drrs) {
    for (let i = 0; i < drrs.length; i++) {
      if (drrs[i] < 0) {
        drrs[i] = 0;
      }
    }
    return drrs
  }

document.write("2. Viết hàm tìm số nhỏ nhất và lớn nhất trong mảng số nguyên.");
document.writeln("<br>");
document.writeln(
  "Nhập vào <strong>timMaxMin</strong> >> sau đó nhập một chuỗi số >> VD: timMaxMin([1,2,3,4,5])"
);
document.writeln("<br><br>");

function timMaxMin(arrs) {
  let Max = Math.max.apply(Math, arrs);
  let Min = Math.min.apply(Math, arrs);
  return "Số lớn nhất là " + Max + " Số nhỏ nhất là " + Min;
}

document.write(
  "3. Viết hàm trả về vị trí đầu tiên của số lẻ, vị trí cuối cùng của số chẵn trong mảng bất kì."
);
document.writeln("<br>");
document.writeln(
  "Nhập vào <strong>viTriChanLe</strong> >> sau đó nhập một chuỗi số >> VD: viTriChanLe([3,5,7,9,2,6,8])"
);

function viTriChanLe(brrs) {
  let soChan;
  let soLe;
  soChan = brrs.filter((number) => number % 2 == 0);
  soLe = brrs.filter((number) => number % 2 != 0);
  return (
    "Vị trí số lẻ đầu tiên là " +
    brrs.indexOf(soLe[0]) +
    " Vị trí số chẵn cuối cùng là " +
    brrs.indexOf(soLe.length - 1)
  );
}


