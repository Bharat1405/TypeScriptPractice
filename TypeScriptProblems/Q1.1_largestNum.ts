/* 
Q1. Write a typescript program which contains one function named as Maximum. That function accepts
three parameters and it should returns largest value from three input parameters.
 */


function Maximum(No1: number, No2: number, No3: number) : number
{
    if(No1 > No2)
    {
        if(No1 > No3)
        {
            return No1;
        }
        else
        {
            return No3;
        }
    }
    else
    {
        if(No2 > No3)
        {
            return No2;
        }
        else
        {
            return No3;
        }
    }
}


var Ret : number  = 0;

Ret = Maximum(23,89,6);

console.log("Largest number is : "+Ret);


