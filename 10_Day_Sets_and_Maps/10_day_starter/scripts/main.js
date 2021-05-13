// let arr = [];

// for(i = 0; i<=10; i++){
//     arr.push(i)
// }

// let abc = new Set(arr);
// abc.delete(8)

// console.log(abc)

// let newArr = ['lemon', 'watermelon', 'apple', 'banana', 'grape', 'lemon']
// let setFruit = new Set(newArr)

// console.log(setFruit)

// const countries = ['Finland', 'Sweden', 'Norway']	
// const setCountries = new Set(countries);

// console.log(setCountries.size)

// for (const countries of setCountries) {
//     console.log(countries)
// }


// function solution(numbers) {
//     var arr = [];
    
//     for (i = 0; i < numbers.length; i++) {
//         for (j = 1; j < numbers.length;  j++) {
//             if (i !== j) {
//                 arr.push(numbers[i] + numbers[j])
//             }
//         }
//     }

//     var answerSet = new Set(arr)
//     var answer = [...answerSet]

//     answer.sort(function(a, b) {
//         return a - b;
//     });

//     return answer
// }


// function solution(s){
//     let txt = s.toUpperCase();
//     let arr = txt.split('')

//     let countS = arr.filter((e) => 'P' === e).length
//     let countY = arr.filter((e) => 'Y' === e).length
//     console.log(countS)
//     console.log(countY)

//     if (countS === countY) {
//         return true
//     }else if(countS === 0 && countY === 0){
//         return true
//     }else {
//         return false
//     }
// }

// console.log (solution('pPoooyY'))


// function solution(x, n) {
//     var answer = [];

//     for(i = 0; i < n;  i++){
//         var sum = sum + 0

//         answer.push(sum);

//         console.log(sum)
//     }
//     return answer;
// }

// console.log( solution(2, 5) )

function makeStar(n,m){
    for(i=0; i<n.length; n++){
        for(j=0; j<m.length; j++){
            console.log('*')
        }
    }
}

