// jshint esversion: 6
//5
let containsDuplicates = s => {
  let charCount = new Array(3).fill(0);
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
//3a
let revWords1 = (sent) => {
  let arr = sent.split(" ");
  let result = "";
  for (var i = 0; i <arr.length; i++){
    revWords1(arr[i]);
  }
  return result;
};
console.log(revWords1("Thursday"));
//3b
//revWords2. Modify the function to use the Array.forEach method. 
let revWords2 = (str) => {
  let arr = str.split("");
  let result = "";
  arr.forEach((char)=>{
    result = char + result;
  });
return result;
};
//3c
//revWords3. Use a for..of loop, and arrow syntax. 
let revWords3 = (str) => {
  let arr = str.split("");
  let result = "";
  for (char of arr){
    result = char + result;
  }
return result;
};
