/* 
Q3. Write a typescript program which contains one function named as DisplayFactors. That function
should accept one number and display factors of that number. 20
 */

function DisplayFactor(No1) : void
{
   let f :number = 0;

   for (f = 0; f<No1; f++)
   {
        if(No1%f == 0)
        {
            console.log(f);
        }
   }
}


var No1 : number  = 20;

DisplayFactor(No1);



