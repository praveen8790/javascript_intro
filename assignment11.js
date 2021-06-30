function table(){
    const n = process.argv.slice(2);
    for(var i=0;i<=Number(n);i++){
        console.log(Math.pow(2,i));
    }   
}

table();