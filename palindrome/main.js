var isPalindrome = function(x) {
  let reverse = (num) => {
    num = parseInt(num.toString().split("").reverse().join(""))
    return num;
   };
   return x === reverse(x) ? true : false
};