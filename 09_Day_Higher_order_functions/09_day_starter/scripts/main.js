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

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const namesToUpperCase = names.map((name) => name.toUpperCase())
    
// console.log(namesToUpperCase)



// function solution(array, command){
//     let answer = []

//     command.forEach( command => {
//         const arr = array.slice(command[0] - 1, command[1]).sort((a , b ) => a - b);
//         answer.push(arr[command[2]-1]);
//     });

//     return answer;
// }

// console.log (solution([1,3,5,2,9], [[2,1,3],[1,2,3]]))


/* 
[알고리즘 1.]
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

*/

// function solution(participant, completion) {
//     const total = participant.length;
//     var answer = '';
    
//     participant.sort();
//     completion.sort();
    
//     for(let i=0; i<total; i++){
//         if(participant[i] !== completion[i]){
//             answer = participant[i];
//             return answer;
//         }
//     }
// }

// console.log( solution( ['leo', 'kiki', 'eden'], ['eden', 'kiki'] ) )

/* 알고리즘 2 */

// [1,3,5,4,2,1,3,5,4,3,2,1,2,3,1,5,2,1,4,3]

// function solution(answer){
//     let number = answer.length;
//     let one = [1, 2, 3, 4, 5];


//     for (i=0; i < (number / 5); i++ ){
//         let newOne = [...one * i]
//         console.log(newOne)
//     }
// }


let number = 30;
let one = [1, 2, 3, 4, 5];


for (i=0; i < (number / 5); i++ ){
    let newOne = [
        ...one + "," * i
    ]
    console.log(newOne)
}

