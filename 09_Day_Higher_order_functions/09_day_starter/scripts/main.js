// callback
// function returnName(callback){
//     callback("jason")
//     console.log("만나서 반갑습니다.")
// }

// function sayHello(name){
//     console.log(`안녕하세요 ${name}씨`)
// }

// returnName(sayHello);

// plus = function(a, b, callback){
//     var result = a + b
//     callback(result)
// }

// plus(5,10, function(res){
//     console.log(res)
// })

// pm =  function(a, b, callback){
//     callback(a+b, a-b);
// }

// pm(5, 10, function(res1, res2){
//     console.log(res1)
//     console.log(res2)
// })

// const numbers = [1, 2, 3, 4]
// ​
// const sumArray = arr => {
//     let sum = 0
//     const callBack = function(element) {
//     sum += element
//     }
//     numbers.forEach(callback)
//     return sum
// }
// console.log(sumArray(numbers))

// const numbers = [1, 2, 3, 4]

// const sumArray = arr => {
//     let sum = 0
//     const callback = function(element) {
//         sum = sum + element
//     }
//     numbers.forEach(callback)
//     return sum
// }

// console.log(sumArray(numbers))


// 0 = 0 + 1
// 0 = 0 + 2
// 0 = 0 + 3
// 0 = 0 + 4

// const arr = [1,3,5,7,9];

// arr.forEach(function(e, i, a) { 
//     console.log('인덱스 '+i+ ': ' +e+', 배열의 전체는: '+a); 
// })


// const arr = [1,3,5,7,9]; 

// arr.forEach((e, i, a)=>{
//     if (e === 5)
//     return; 
//     console.log('인덱스 '+i+ ': ' +e+', 배열의 전체는: '+a);
// })

// return true, false 든 그냥 continue console.log('인덱스 '+i+ ': ' +e+', 배열의 전체는: '+a);

// const arr = [1,3,5,7,9];
// arr.some((e, i, a)=>{ 
//     if (e === 3) return false; // continue
//     if (e === 7) return true; // break;
    
//     console.log('인덱스 '+i+ ': ' +e+', 배열의 전체는: '+a);
// })


// const obj = {a: '에이', b: '비', c: '씨'};
// const arr = [1,3,5,7,9];

// for (let i in arr){ 
//     console.log(i+': '+arr[i]);
// } 

// 0 : 1
// 1 : 3
// 2 : 5
// 3 : 7
// 4 : 8


// for (let i in obj){ 
//     console.log(i+': '+obj[i]);
// }

// a : 에이.

// const modifiedArray = arr.map(function (element, index, arr) {
//     return element
// })

// const numbers = [1, 2, 3, 4, 5]
// const numbersSquare = numbers.map((num) => num * num)

// console.log(numbersSquare)

// //  [1,4,9,,16,,25]

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())

console.log(namesToUpperCase)

