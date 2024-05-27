/* Q5. Write a typescript program which contains one function named as Fibonacci. That function accept 
     one number from user and print Fibonacci series till that number.
 */
function Fibonacci(No1:number) : void
{
   
   let i : number = 0;
   let j : number = 1;

   console.log(j);
   let nx : number = i+j;

   while(nx <= No1)
   { 
    console.log(nx);
    i = j;
    j = nx;
    nx = i + j;
    
   }
}


var No1 : number  = 21;
Fibonacci(No1);
