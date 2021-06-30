
var year=process.argv;
if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
{
    console.log("\n"+year+" is a leap year");  
}
else
{
    console.log("\n"+year+" is not a leap year");  
}