/*
for (i = 0; i <= 10; i++) {
    console.log(i)
}
*/

/*
let i = 0;
while(i <= 10) {
    console.log(i);
    i++
}
*/

/*
let i = 0;
do {
    console.log(i)
    i++
} while (i <= 10)
*/

/*
for (i = 0; i < 8; i++) {
    console.log('*'.repeat(i))
}
*/

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// for (i = 0; i <= 10; i++) {
//     console.log(`${i} x ${i} = ${i * i}`)
// }


// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

// 0 x 0   0 x 0    0 x 0 x 0   0000
// 1 x 1   1 x 1    1 x 1 x 1   1111
// 1 x 2   2 x 2    3 x 3 x 3   2222
// 1 x 3   3 x 3    4 x 4 x 4

// 0 ^ 2
// 1 ^ 2
// 2 ^ 2
// 3 ^ 2
// for (i = 0; i <= 10; i++) {
//     console.log(Math.pow(i, 3))
// }

// sum = 0;
// for (i = 0; i <= 100; i++) {

//     if(i % 2 != 0) {
//         sum = sum + i;
//         console.log(sum)
//     }
    
// }


// let randomNum = Math.floor(Math.random() * 10);
// let arr = new Array();

// for(i = 1; i <= 5; i++){
//     randumArr = randomNum * i
//     arr.push(randumArr)
// }
// console.log(arr)

let ranTxt = Math.random().toString(36).substr(2,11);
console.log(ranTxt)