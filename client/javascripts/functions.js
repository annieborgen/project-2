// jshint esversion: 6
//part 5
let containsDuplicates = s => {
  let charCount = new Array(3).fill(0);
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return false;
    } else {
      cArr[i]++;
    }
  }
  return true;
};
console.log(containsDuplicates("Od or Ev"));
//part 3a
let revWords1 = (str) => {
  let arr = str.split("");
  let result = "";
  for (var i = 0; i < arr.length; i++){
    revWords1(arr[i]);
  }
  return result;
};
console.log(revWords1("Thursday"));
//part 3b
//revWords2. Modify the function to use the Array.forEach method. 
let revWords2 = (str) => {
  let arr = str.split("");
  let result = "";
  arr.forEach((char)=>{
    result = char + result;
  });
return result;
};
console.log(revWords2("Thursday"));
//part 3c
//revWords3. Use a for..of loop, and arrow syntax. 
let revWords3 = (str) => {
  let arr = str.split("");
  let result = "";
  for (char of arr){
    result = char + result;
  }
return result;
};
console.log(revWords3("Thursday"));
