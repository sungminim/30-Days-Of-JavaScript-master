// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

function outerFunc() {
    let x = 10;
    let innerFunc = () => console.log(x)
    innerFunc();
}

  outerFunc(); // 10