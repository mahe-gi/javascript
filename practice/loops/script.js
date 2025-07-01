// Ques 1 : Basic Calculator - Adding Numbers (using Named functions)
// --------
// 	-  An online calculator application needs a function that can add any two given numbers and provide their sum.

// Description -
// 	Imagine you're building a simple web-based calculator. When a user inputs two numbers and clicks "Add", you need a reliable way to perform this basic arithmetic operation. A named 	function is perfect for this because adding numbers is a common, repeatable task.

// Steps -
// 	- Create a named function called addTwoNumbers.

// 	- It should accept two inputs: num1 and num2.

// 	- Inside the function, add num1 and num2.

// 	- The function should give back (return) the calculated sum.

// 	- Call the function with different pairs of numbers to test it.

// Test Cases -

// 	Sample input : num1 = 3, num2 = 5
// 	Sample output : 3 + 5 = 8

// 	Sample input : num1 = 3, num2 = 5
// 	Sample output : 3 + 5 = 8

function addTwoNumbers(a,b){
    return a+b;
}

let num1 = 3, num2 = 5
let ans  =addTwoNumbers(num1,num2)

console.log(`${num1} + ${num2} = ${ans}`);



// ======================================================================================================================================

// Ques 2 :  Personalized Greeting Message
// --------
// 	- A website wants to display a personalized welcome message to each logged-in user. Create a function to generate this message.

// Description : 
// 	When a user logs into their account (e.g., on a social media site, an online store, or a news portal), you want to greet them by name. Instead of writing console.log("Hello, 	[username]! Welcome back!"); everywhere, a function makes this greeting consistent and easy to update.

// Steps :

// 	- Create a named function called createWelcomeMessage.

// 	- It should accept one input: userName.

// 	- Inside the function, combine a fixed greeting phrase with the userName.

// 	- The function should return the complete greeting string.

// 	- Call the function with different user names.

// Test Cases :

// 	Sample Input : Alice
// 	Sample Output: Hello, Alice! Welcome to our platform!

// 	Sample Input : Guest
// 	Sample Output: Hello, Guest! Welcome to our platform!

let createWelcomeMessage =(a)=>{
    return `Hello, ${a}! Welcome to our platform!`;
}
let str = "Mahesh";
console.log(createWelcomeMessage(str));





// // ===================================================================================================================================

// Ques 3 : Basic Password Strength Validator
// --------
// 	- A registration form needs to check if a user's chosen password meets multiple basic criteria: it must have a minimum length AND contain at least one digit (0-9).

// Description : 
// 	Stronger passwords are essential for security. This function will perform two checks: length and character type (digit presence). Both must pass for the password to be considered 	"strong enough."

// Steps:

// 	- Create a named function called checkPasswordStrength.


// 	- It should accept two inputs: password (string) and minLength (number).

// 	- First, check if password.length is less than minLength. If so, return false immediately.

// 	- Iterate through each character of the password string. For each character, check if it is a digit (e.g., '0' through '9'). Keep a flag (hasDigit).

// 	- After checking all characters, if hasDigit is true AND the length check passed, return true. Otherwise, return false.

// Test Cases :

// 	Sample Input : password = "abc1234", length = 8
// 	Sample Output: 'abc1234' (Min 8): false (too short)

// 	Sample Input : password = "password123", length = 8
// 	Sample Output: 'password123' (Min 8): true

// 	Sample Input : password = "nopassword", length = 8
// 	Sample Output: 'nopassword' (Min 8): false (no digit)

let checkPasswordStrength =(password ,minLength)=>{
    if(password.length<8){
        return -1;
    }else{
      
        let flag=0;
        for(let i=0;i<password.length;i++){
           
            if(password[i]>='0'&&password[i]<='9'){
                flag=1;
            }
            
        }
        if(flag){
            return true
        }else{
            return false
        };
    }


}
let a ="mahesh123",length =8;
let ans = checkPasswordStrength(a,length)
if(ans == -1){
    console.log(`'${a}' (Min 8): false (too short)`);
  
}
else if(ans){
    console.log(` '${a}' (Min 8): ${ans}`);
    
}else {
    console.log(` '${a}' (Min 8): false (no digit)`)
   
}


// ====================================================================================================================================

// Ques 4 : Character Type Analyzer (Word Contains Vowel & Consonant)
// --------
// 	- Create a function that checks if a single given word contains at least one vowel AND at least one consonant (non-vowel letter).

// Description :
// 	This is another step in basic text validation or game logic. It's a more complex character analysis than just counting, as it requires tracking two different conditions 	simultaneously.

// Steps:

// 	- Create a named function called analyzeWordForVowelConsonant.

// 	- It should accept one input: word (a string).

// 	- Initialize two boolean flags: hasVowel and hasConsonant to false.

// 	- Loop through each character of the word.

// 	- Convert each character to lowercase.

// Character Type Check:

// 	- If the character is a vowel (a, e, i, o, u), set hasVowel to true.

// 	- If the character is a letter but NOT a vowel, set hasConsonant to true. (You might need a separate check for isLetter first, or just assume input is only letters.) For 		  simplicity, we'll assume characters are only letters.

// 	- If both hasVowel and hasConsonant become true at any point, you can break the loop early as the condition is met.

// 	- After the loop, return hasVowel && hasConsonant.

// Test Cases : 
	
// 	Sample Input : word = "hello"
// 	Sample Output: 'hello': true 

// 	Sample Input : word = "rhythm"
// 	Sample Output: 'rhythm': false

// 	Sample Input : word = "AEIOU"
// 	Sample Output: 'AEIOU': false 

// 	Sample Input : word = "BCD"
// 	Sample Output: 'BCD': false 	


function analyzeWordForVowelConsonant(word) {
    let hasVowel = false;
    let hasConsonant = false;
    const vowels = "aeiou";

    for (let char of word.toLowerCase()) {
        if (vowels.includes(char)) {
            hasVowel = true;
        } else {
            hasConsonant = true;
        }

        if (hasVowel && hasConsonant) {
            break;
        }
    }

    return hasVowel && hasConsonant;
}
const word = "mahesh"

console.log(analyzeWordForVowelConsonant(word));




// =================================================================================================================================================	



