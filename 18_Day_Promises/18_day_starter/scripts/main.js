// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

function countdown(seconds){
    return new Promise(function(resolve, reject){
        const timeoutIds = [];
        for(let i = seconds; i>=0; i--){
            timeoutIds.push(setTimeout(function(){
            if(i > 10) {
                timeoutIds.forEach(clearTimeout);   // 등록된 setTimeout 스케쥴을 다 지워버린다.
                return reject(new Error("10초를 초과하는 수는 셀수 없다. 입력받은 초:" + i));
            }
            if(i>0) console.log(i + '...');
            else resolve(console.log("GO!"));
            }, (seconds-i)*1000));
        } //-for
    });
}

countdown(7)