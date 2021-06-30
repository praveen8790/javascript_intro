
function harmonic(){
    const n = process.argv.slice(2);
    var sum = 0;
    for(var i=1;i<=n;i++){
        sum = sum + (1/i);
    }
    console.log(sum);
}

harmonic();