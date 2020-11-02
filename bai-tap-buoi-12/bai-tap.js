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

function minMax(Array1){
  if (Array1.length < 0) {
      return "Hay nhap vao mang"
  }
  let min = Array1[0];
  let max = Array1[0];
  for (let i = 1; i < Array1.length; i++) {
      if (min > Array1[i]) {
          min = Array1[i];
      }        
  }
  for (let j = 1; j < Array1.length; j++) {
      if (max < Array1[j]) {
          max = Array1[j];
      }        
  }
  return "So nho nhat mang la "+ min + " so lon nhat cua mang la " + max + "."; 
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


//Cach 2
function oddEven2(arr) {
  let odd = -1;
  let even = -1;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      odd = i;
      break;
    }
  }
  for (j = arr.length - 1; j >= 0; j--) {
    if (arr[j] % 2 == 0) {
      even = j;
      break;
    }
  }

  return `${odd != -1
    ? `Vị trí số lẻ đầu tiên là ${odd}`
    : "Không có số lẻ nào"}, ${even != -1
    ? `Vị trí số chẵn cuối cùng là ${even}`
    : "Không có số chẵn nào"}`
}


