function table(){
    const n = process.argv.slice(2);
    for(var i=0;i<=Number(n);i++){
        console.log(Math.pow(2,i));
    }   
}

function harmonic(){
    const n = process.argv.slice(2);
    var sum = 0;
    for(var i=1;i<=n;i++){
        sum = sum + (1/i);
    }
    console.log(sum);
}

function checkPrime(isPrime){
    //const isPrime = process.argv.slice(2);
    var flag = 0;
    for (let index = 2; index < isPrime; index++) {
        if(isPrime%index==0){
            flag=1;
            //console.log("is composite");
        }       
    }
    if(flag==0){
        //console.log("is prime");
        return isPrime;
    }
}

function listPrime(){
    const limit = process.argv.slice(2);
    for(let i=2;i<=Number(limit);i++){
        console.log(checkPrime(i));
    }
}

listPrime();
