

// Given an integer x, return true if x is a palindrome, and false otherwise. 

// Example 

// Input: x = -121 
// Output: false 
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore, it is not a palindrome. 



let  num = -121 


const palindrome=(x)=>{
    let y= x.toString()
    let results=""
    for(let i=y.length-1; i>=0; i--){
        results+=y[i]
    }
    if(y===results){
        return true
    }
    else{
        return false
    }

}
console.log(palindrome(num));