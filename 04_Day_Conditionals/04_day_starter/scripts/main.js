// this is your main.js script

/*
(1)
let age = Number(prompt('enter your age'));

age >= 18 
    ? document.write('You are old enough to drive')
    : document.write(`You are left with ${ 18 - age } years to drive`)
*/


// (2)
/* let a = 4
let b = 3

a > b  
    ? console.log('a is greather than b')
    : console.log('a is smaller than b')
*/

// (3)
/* let num = Number(prompt('숫자를 입력하세요'))

num % 2 === 0 
    ? alert('짝수다')
    : alert('홀수다')

console.log(num)

*/

//(3)

/*
let score = Number(prompt('점수를 입력하세요'))

switch (score){
    case score >= 80 :
    alert('A')
    break;

    case score >= 70 && score < 90 :
    alert('B')
    break;

    case score >= 60 && score < 70 :
    alert('C')
    break;

    case score >= 50 && score < 60 :
    alert('D')
    break;

    default: alert('F')
}   

*/

// (4)
/*
let weather = prompt('What is the day today?')

switch (true){
    case weather === 'September' :
    alert('the season is Autumn')
    break;

    case weather === 'October' :
    alert('the season is Autumn')
    break;

    case weather === 'November' :
    alert('the season is Autumn')
    break;

    case weather === 'November' :
    alert('the season is Autumn')
    break;
    
    case weather === 'November' :
    alert('the season is Autumn')
    break;

    case weather === 'December' :
    alert('the season is Winter')
    break;

    case weather === 'January' :
    alert('the season is Winter')
    break;

    case weather === 'February' :
    alert('the season is Winter')
    break;

    case weather === 'March':
    alert('the season is Spring')
    break;  

    case weather === 'April':
    alert('the season is Spring')
    break;  

    case weather === 'May':
    alert('the season is Spring')
    break;  

    case weather === 'June':
    alert('the season is Summer')
    break;  

    case weather === 'July':
    alert('the season is Summer')
    break;  

    case weather === 'August':
    alert('the season is Summer')
    break;  
}   
*/

// 3
/*
let day = prompt('What is the day today?').toLowerCase();

switch (true) {
    case day === 'monday' :
    alert('Monday is working day')
    break;
    
    case day === 'tuesday' :
    alert('Tuesday is working day')
    break;

    case day === 'wednesday' :
    alert('Wednesday is working day')
    break;

    case day === 'firday' :
    alert('Friday is working day')
    break;

    case day === 'staurday' :
    alert('Saturday is holiday')
    break;

    case day === 'sunday' :
    alert('Sunday is holiday')
    break;
}
*/

// 3
/*
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.push('sugar')
shoppingCart[3] = 'Green Tea'

console.log(shoppingCart)
*/

//4
/*
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)
*/

// Level3 

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const agesLen = ages.length
const maxValue = Math.max.apply(null, ages);
const minValue = Math.min.apply(null, ages);

const average = Number(ages[0]) + Number(ages[1]) + Number(ages[2]) + Number(ages[3])


console.log(maxValue)
console.log(minValue)
console.log(average)