// // 1.write a function to validate given number is prime of not 

// const primeOrNot =(n)=>{
//     let c=0;
//     for(let i=2;i<=n/2;i++){
//         if(n%i==0)c++;   
//     }
//     let ans = (c==0) ?true:false
//      return ans
// }

// const ans = primeOrNot(5);
// console.log(ans)

// // 2.write a function to validate given number is pallindrome or not 

// const pallindrome = (n)=>{
//     let val =0;
//     let temp=n;
//     while(temp!=0){
//         let last = temp%10;
//         val=(val*10)+last;
//         temp = parseInt(temp/10);
//     }
//     if(n==val){
//         return true;
//     }
//     return false;
// }
// let ans1 = pallindrome(131);
// console.log(ans1)

// // 3. write a js function to accept three numbers and check sum of any two numbers equal to third value or not and print the result 6,10,4 -> "adding 6+4 result 10"

// const sumOfTwoE =(a,b,c)=>{
//     if(a+b == c){
//         console.log(`adding ${a} and  ${b} result ${c}`);
//     }
//     else if(a+c == b){
//         console.log(`adding ${a} and  ${c} result ${b}`);
//     }else if(b+c ==a ){
//         console.log(`adding ${b} and  ${c} result ${a}`);
//     }else{
//         console.log("Not equals");
//     }
// }
// sumOfTwoE(6,10,4)

// // 4.write a js function to accept a string print no of vowels , consonents and spaces in it .


const  countCharacters =(str)=> {
    let v = 0;
    let c = 0;
    let spaces = 0;
    str = str.toLowerCase();
    for (let char of str) {
      if (char >= 'a' && char <= 'z') {
        ('aeiou'.includes(char)) ? v++: c++;
      } else if (char === ' ') {
        spaces++;
      }
    }

    console.log(`vowels: ${v}`);
    console.log(`consonents: ${c}`);
    console.log(`Spaces: ${spaces}`);
  }
  

  countCharacters("Hello World");
  
// // 5.write a js function to accept two strings and check whether one string is anagram of another string or not

// const anagram =(str1,str2)=>{

//     let a =str1.split("").sort().join("")
//     let b =str2.split("").sort().join("")
//     if(a==b){
//         console.log("Anagram");
//     }else{
//         console.log("Not Anagram");

//     }
// }
// anagram("hah","ahh");

// // 6.write a js function to accept a string and print each letter count


let str ="Prasad"






// // 7. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// // Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

