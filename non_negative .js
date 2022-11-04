// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. 



let x=Math.random()*40

console.log(x);
const squareRoot=(num)=>{

 let square= Math.sqrt(num)


//  print squareroot before rounding down  to the nearest number
  console.log(square);
//   return number after floor
 return Math.floor(square)

}


console.log(squareRoot(x));