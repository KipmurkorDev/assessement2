// Given a string s, reverse only all the vowels in the string and return it. 

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once. 

// Example 

// Input: s = "hello" 
// Output: "holle" 



let s = "hello" 
const  reverseVowels = function (s) {
    const arr = s.split("");
    let j = arr.length;

    let i = 0;
  
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
  
    while (i < j) {
      if (vowels.indexOf(arr[i]) === -1) {
        i++;
        continue;
      }
      if (vowels.indexOf(arr[j]) === -1) {
        j--;
        continue;
      }
  
      const change = arr[i];
      arr[i] = arr[j];
      arr[j] = change;
  
      i++;
      j--;
    }
  
    return arr.join("")
}
console.log(reverseVowels(s));