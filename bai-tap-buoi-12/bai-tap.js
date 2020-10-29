document.write("1.  Cho một mảng số nguyên. Viết hàm kiểm tra nếu trong mảng có phần tử âm thì thay thế nó bằng 0.");
document.writeln("<br>");
document.writeln("Chưa làm được");
document.writeln("<br><br>");

document.write("2. Viết hàm tìm số nhỏ nhất và lớn nhất trong mảng số nguyên.");
document.writeln("<br>");
document.writeln("Nhập vào <strong>timMaxMin</strong> >> sau đó nhập một chuỗi số >> VD: timMaxMin([1,2,3,4,5])");
document.writeln("<br><br>");

function timMaxMin(arrs){
    let Max = Math.max.apply(Math,arrs);
    let Min = Math.min.apply(Math,arrs)
    return ("Số lớn nhất là " + Max + " Số nhỏ nhất là " + Min)
}

document.write("3. Viết hàm trả về vị trí đầu tiên của số lẻ, vị trí cuối cùng của số chẵn trong mảng bất kì.");
document.writeln("<br>");
document.writeln("Chưa làm được");


var brrs = [];
function soChan(brrs){
    let soChan = [];
    soChan = brrs.filter((number) => (number % 2 ==0));
    return soChan;
}
function soLe(brrs){
    let soLe = [];
    soLe = brrs.filter((number) => (number % 2 ==1));
    return soLe;
}

function viTri(){
    return("so le la" + soLe + "so chan la " + soChan)
}

newArray = [];
function mang(){
    var soNguyen = [];
    if (newArray <0){
        newArray = 0
    };
    console.log(soNguyen);
}
mang();



