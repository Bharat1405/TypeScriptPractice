/* 
Q2. Write a typescript program which contains one function named as Area. 
That function should calculate area of circle. Accept value of radius from user and return its area. Default value of PI should be 3.14 
if it is not provided by the caller. */


function Area(Rad:number, PI:number=3.14) : number
{
   let Area :number = 0;

   Area = PI * Rad * Rad;

   return Area;
}


var Ret : number  = 0;
var Rad : number  = 1;
Ret = Area(Rad);

console.log("Area of Circle : "+Ret+" Sq.Unit");


