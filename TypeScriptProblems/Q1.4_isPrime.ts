/* 
Q4. Write a typescript program which contains one function named as ChkPrime. 
That function should accept one number and it should return true if the given number 
is prime and otherwise return false. */

function CheckPrime(No1:number) : boolean
{
   let Prime :boolean = false;

   if(No1<=2){
    return true;
   }
   
   for(let i=2; i<= Math.sqrt(No1); i++)
   {
    if (No1 % i === 0)
    {
        return false;
    }
   }
   return true;
}


var Ret : boolean  = false;
var No1 : number  = 13;
Ret = CheckPrime(No1);

if(Ret){
    console.log(No1+" is prime number");
}else{
    console.log(No1+" is not prime number");
}

