
    let numbers = [1,2,3,4,5,6]
    let names = ["hihi", "hoho", "haha"]
    let checks = [true, true, false]

    numbers[3]

    numbers.length
    names.length
    checks.length


    numbers.push(7) //them phan tu vao mang

    names.sort(); //sap xep mang

    names.unshift('hoa') //them phan tu vao dau mang

    names.shift('hieu') //them phan tu vao cuoi mang

    console.log("Index of value 'hihi'", names.indexOf('hihi'))

    for (let i = 0; i < names.length; i++){
        console.log(names[i]);
    }

//bai tap tinh tong
function Sum(array){
    let tong = 0;

    for (let i of array){
        tong=  tong + i;
    }

    return tong;
}

console.log("Tong la " + Sum([2,3,4]))

// bai tap tinh tong binh phuong
function square(array){
    let tong = 0;

    for (let i of array){
        tong=  tong + Math.pow(i,2);
    }

    return tong;
}

console.log("Ket qua " + square([2,2,2]))

//map
const mangSo = [2, 3, 4, 5];
const doubles = mangSo.map((number) => number * 2);

const arrs = [2, 3, 4, 5];
const divide = arrs.map((number) => number % 2);

// function timSodu(){
//     let new
// }

function timSoChan(brrs){
    let soChan = []
    soChan = brrs.filter((number) => (number %2 ==0))
    return soChan;
}

function timTen(crrs, kyTu){
    let Ten = []
    Ten = crrs.filter(string => (string.substring(0,1) == kyTu ||string.substring(0,1) == kyTu))
    return Ten;
}