let a = process.argv.slice(2);
if(a[1]>3 && a[1]<6){
    console.log(true);
}
else if(a[1]==3 && a[0]>=20){    
  console.log(true);
}
else if(a[1]==6 && a[0]<=20){
    console.log(true);
}
else{
    console.log(false);
}
