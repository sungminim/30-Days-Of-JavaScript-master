// 1
// function Name (firstName, lastName) {
//     let fullName = firstName + lastName
//     return fullName
// }

// console.log(Name('sungmin', 'im'))


// 2
// function addNumber(a,b) {
//     let sum = a + b;
//     return sum
// }

// console.log( addNumber(5,6) )



// 3
// function areaOfRectangle(length, width) {
//     let area = length * width; 
//     return area
// }

// console.log( areaOfRectangle(20,10) )

// 4
// function perimeterOfRectangle(length, width) {
//     let perimeter = 2 * (length + width);
//     return perimeter
// }

// console.log( perimeterOfRectangle(10, 20) ) 

// //  5
// function findMax(a, b, c) {
//     let maxNum = Math.max(a,b,c);
//     return maxNum
// }

// console.log ( findMax(1,2,3) )

// 6
// function evensAndOdds(num) {
//     console.log( typeof num )
//     for (i = 0; i < num; i++) {
//         if(i % 2 != 0) {
//             console.log(i.length)
//         }
//     }

// }

// console.log( evensAndOdds(100) )

// function sumArrayValues(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }

//     return sum;
// }

// console.log(sumArrayValues([1, 2, 3, 4, 5]))

// areaOfCircle = (radius) => {
//     let area = Math.PI * radius * radius;
//     return area;
// }

// console.log (  areaOfCircle(10) )

// function sumAll() {
//     let sum = 0;

//     for(i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i]
//     }
//     return sum;
// }

// console.log (sumAll(2,4,5,7,6,2))

// const sumAllNum = ( ... args ) => {
//     let sum = 0;
//     for (i = 0; i < args.length; i++) {
//         sum = sum + args[i]
//     }
//     console.log(sum)
// }

// sumAllNum([1,2,3,4,5])

// function printArray() {
//     console.log(arguments)
// }

// console.log( printArray(1,2,3,4) )

// function showDateTime() {
//     const now = new Date() ;
//     const year = now.getFullYear();
//     const month = now.getMonth() + 1
//     const day = now.getDate();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const time =(  `${day}/${month}/${year} ${hours}:${minutes}`  )

//     return time;
// }

// document.write (showDateTime())

// function swapValues(x, y) {
//     var newArray = [x, y]
//     [x, y] = [y, x]
// }


// swapValues(swapValues(2,3))

// const dog = {
//     name : 'gguggu',
//     legs : 4,
//     color : 'black',
//     properties : 'woof woof'

// }

// console.log(dog)


// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }
  console.log(higherOrder(2)(3)(10))

