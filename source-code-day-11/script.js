
/* Day la kieu du lieu string */
console.log('holholoholo');
console.log('Hom nay "khong an com"')
console.log("abi nay 'hay qua'")

/* Đây là kiểu dữ liệu số */
// var x = 5;
// var y = 5.5;
// var z;
// z = x + y;

/* Kiểu dữ liệu boolean (đúng/sai) */
var check = true;
var uncheck = false;

//block scope
let newname = 'Ana';
let newage = 2
function getName(){
    newname = 'Hieu';
    newage = 5
}
console.log(newname)


//Viết hàm tính tổng 2 số
 function sum(x,y) {
     var x
     var y
     var z =x+y
     alert(z);
 }

//  function sendEmail(from, message = "Không có nội dung") {
//     alert(from + ": " + message);
// }
// sendEmail("Robin");

// document.write('Xin chao');
document.writeln("Xin chao cac ban");
document.writeln("cua toi");

//Tính bình phương của 1 số
// function squareOfNumber(x){
//     return Math.pow(x,2);
// }

//Tính bình phương của 1 tổng
function squareOfSum(a,b,c){
     var sum=3*a + 2*b -c
     alert(Math.pow(sum,2));
}
 