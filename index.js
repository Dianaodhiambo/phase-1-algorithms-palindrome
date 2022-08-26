function isPalindrome(word) {
  // Write your algorithm here

let first, last;
for (let index = 0; index < (word.length/2); index++) {
  first = word[index]; 
  last = word[(word.length-1)-index];
  if(first !== last){
    return false;
  }
}
return true;
}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
