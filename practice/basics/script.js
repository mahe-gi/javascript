// // 1. 
// console.log("hello");
// // 2.
// let a =1; //number
// let b=1.3; //number 
// let c="string" //string
// let d ='a' //string
// let e; // undefined
// let f=null; //object
// let g=NaN; //number
// let h=true; //boolen
// let i = [1,2,3]; //object
// let j=()=>{} //function
// console.log(typeof a , typeof b, typeof c,typeof d, typeof e,typeof f,typeof g,typeof h ,typeof i, typeof j)
// // 3.

// let val1=-10;
// let val2 =12;

// console.log(Math.abs(val1)) //absolute val = 10
// console.log(Math.sqrt(val2)); // square root val = 3.4641
// console.log(Math.cbrt(val2)); // cube root 2.28
// console.log(Math.max(1,2,3,4)) // 4
// console.log(Math.min(1,2,3,4)); //1
// console.log(Math.ceil(1.234)); // 2
// console.log(Math.floor(1.234)); //1
// console.log(Math.round(1.5)); // 2
// console.log(Math.ceil(Math.random()*6)); // 1-6 random number

// // 4.
//  let str = "Hello World";
//  console.log(str.toLowerCase()); //hello world
//  console.log(str.toUpperCase()); //HELLO WORLD
//  console.log(str.indexOf('l')); // 2 - index
//  console.log(str.lastIndexOf('o')); // 7 - index
//  console.log(str.charAt(8)); // r - in index of 8
//  console.log(str.split('')); //['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
//  console.log(str.concat(" bro")); //Hello World bro
//  console.log(str.slice(4,7)); // o W
//  console.log(str.at(0)); // H
//  console.log(str.charCodeAt(1)); //101 - asci value of e
//  console.log(str.codePointAt(1)); // 101
//  console.log(str.endsWith("ld")); // true
//  console.log(str.includes("ld")); // true
//  console.log(str.length); // 11 
//  console.log(str.search('H')); // 0
 

// // 5.check given number leap year or not
// let year =2000;
// console.log((year%400==0 || year%4==0 && year%100!=0)?"Leap year":"Not a leap year")

// // 6.calculator using switch
//  let num1 =10,num2=20,opr ='+';

//  switch(opr){
//     case '+': console.log(num1+num2) ; break;
//     case '-': console.log(num1-num2);break;
//     case '*': console.log(num1*num2);break;
//     case '/': console.log(num1/num2);break;
//     case '%': console.log(num1%num2);break;

//  }

// //  7. Cards game 

// function Cards(a,b,c){
// if(a==1){
//     console.log('A');
// }else if(a==11){
//     console.log('k');    
// }else if(a==12){
//     console.log('Q');
// }else if(a==13){
//     console.log('J');
// }else{
//    console.log(a);
// }
// if(b==1){
//     console.log('A');
// }else if(b==11){
//     console.log('k');    
// }else if(b==12){
//     console.log('Q');
// }else if(b==13){
//     console.log('J');
// }else{
//    console.log(b);
// }
// if(c==1){
//     console.log('A');
// }else if(c==11){
//     console.log('k');    
// }else if(c==12){
//     console.log('Q');
// }else if(c==13){
//     console.log('J');
// }else{
//    console.log(c);
// }


// }


// let val=1;


// while(val){

// let a = Math.ceil(Math.random()*13)
// let b = Math.ceil(Math.random()*13)
// let c = Math.ceil(Math.random()*13)

// if(a==b && a==c && c==b){
//      Cards(a,b,c);
//     console.log("You won");
//     break;
// }else{
//     console.log("You Lose");
//      Cards(a,b,c);
// }
   

// }




// // //  -> loops

// // // 1. 10 random numbers of 8 digit
// for (let i = 0; i <8; i++) {
//     console.log(Math.floor(10000000 + Math.random() * 900000));
// }

// // // 2. write a js code to print 1 to  100 whenever 3 multiples print "foo"

// for (let i = 1; i <=100; i++) {

//     if(i%3==0){
//         console.log("foo");
//     }else if(i%5==0){
//         console.log("zoo");
        
//     }else if(i%3==0 && i%5==0){
//         console.log("foozoo");
//     }else{
        
//         console.log(`${i}`);
//     }
        
//     } 

//     //  // 3. 1 to 20 odd numbers in reverse

    // for(let i=20;i>=1;i--){
    //     if(i%2==0){
    //         console.log(`${i}`);
    //     }
    // }
// // // 4. 
// // 1
// // 1 2
// // 1 2 3
// // 1 2 3 4

// for(let i=1;i<=4;i++){
//     str =" ";
//     for(let j=1;j<=i;j++){
//         str+=j+" ";
//     }
//     console.log(`${str}`);
// }
//  // 5. 
// 1 
// 2 3 
// 4 5 6
// 7 8 9 10
// let a=1;
// for(let i=1;i<=4;i++){
//     str =" ";
//     for(let j=1;j<=i;j++){
//         str+=a+++" ";
//     }
//     console.log(`${str}`);
// }
// // 6. 
// 1 2 3 4
// 1 2 3 
// 1 2
// 1

// for(let i=1;i<=5;i++){
//     str =" ";
//     for(let j=1;j<=5-i;j++){
//         str+=j+" ";
//     }
//     console.log(`${str}`);
// }




// 6. fibanocci


// let a =0,b=0,c=1;
// for(let i=1;i<=100;i++){
//  console.log(`${b}`);
//  a=b
//  b=c
//  c=a+b;
// }


// 6. pascal trialngle 


// let space = 5;
// let pair = 1;

// for (let i = 1; i <= 6; i++) {
//     let line = '';

//     for (let a = 1; a <= space; a++) {
//         line += ' ';
//     }

//     let x = 1;
//     let num = i - 1;
//     let den = 1;

//     for (let b = 1; b <= pair; b++) {
//         line += x + ' ';
//         x = (x * num) / den;
//         num--;
//         den++;
//     }

//     console.log(line);
//     space--;
//     pair++;
// }


// 7. prime


