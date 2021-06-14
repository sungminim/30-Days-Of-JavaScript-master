function populationClick(){
    let maxVal = countries.sort(function(a,b) {
        return b.population - a.population;
    });
    maxVal = maxVal.slice(0,10)
    
    let populationNameArray = maxVal.map((e) => e.name)
    let populationArray = maxVal.map((e) => e.population)
    
    for(i = 0; i<10; i++){
        document.getElementById("name"+i).innerHTML = populationNameArray[i]
        document.getElementById("value"+i).innerHTML = populationArray[i].toLocaleString('ko-KR');
        document.getElementById("bar"+i).innerHTML = (populationArray[i] * 100) / populationArray[0];
        document.getElementById("bar"+i).style.width = document.getElementById("bar"+i).innerText + "%"
    }
}



function languagesClick(){
    let maxVal = countries.sort(function(a,b) {
        return b.population - a.population;
    });
    maxVal = maxVal.slice(0,10)
    
    let populationNameArray = maxVal.map((e) => e.name)
    let populationArray = maxVal.map((e) => e.population)
    
    for(i = 0; i<10; i++){
        document.getElementById("name"+i).innerHTML = populationNameArray[i]
        document.getElementById("value"+i).innerHTML = populationArray[i].toLocaleString('ko-KR');
        document.getElementById("bar"+i).innerHTML = (populationArray[i] * 100) / populationArray[0];
        document.getElementById("bar"+i).style.width = document.getElementById("bar"+i).innerText + "%"
    }
}

function languagesClick2(){
    const score = countries.map((i) => {
        return i.languages
    })

    const test = score.reduce( (a,b) => { return a.concat(b); }, [] );
    
    const res2 = test.reduce((t, a) => { if (t[a]) { t[a]++ } else { t[a] = 1 } return t }, {})

    console.log(res2)

}

languagesClick2()