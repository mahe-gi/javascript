// Que 1.  Running a Fixed Number of Test Cases ( For loop )
// ------
// 	 A software testing script needs to execute a set of tests a predefined number of times.

// - The for loop iterates testRuns times. Each iteration simulates one test case execution. This ensures consistency in repetitive testing.

// 	Sample input : testRuns = 10
// 	Sample output : --- Automated Test Execution ---
// 			Running Test Case #1: Checking system performance...
// 			Running Test Case #2: Checking system performance...
// 			Running Test Case #3: Checking system performance...
// 			Running Test Case #4: Checking system performance...
// 			Running Test Case #5: Checking system performance...
// 			Running Test Case #6: Checking system performance...
// 			Running Test Case #7: Checking system performance...
// 			Running Test Case #8: Checking system performance...
// 			Running Test Case #9: Checking system performance...
// 			Running Test Case #10: Checking system performance...
// 			--- All 10 Test Cases Completed ---

let testRuns =11;
for(let i=1;i<=testRuns;i++){
    console.log(`Running Test Case #${i}: Checking system performance...`);
}
console.log(`--- All ${testRuns} Test Cases Completed ---`);


// =================================================================================================================

// Que 2.	Calculating Sum of First 'N' Numbers
// -------
// 	 Calculate the total sum of all positive integers up to a given number 'N'.

//  The for loop iterates from 1 up to N. In each iteration, it adds the current number (i) to totalSum, effectively summing all numbers in the range.

// 	Sample input : 5
// 	Sample output : --- Summing Numbers from 1 to 5 ---
// 			Adding 1. Current sum: 1
// 			Adding 2. Current sum: 3
// 			Adding 3. Current sum: 6
// 			Adding 4. Current sum: 10
// 			Adding 5. Current sum: 15
// 			Total sum of first 5 numbers is: 15

let n =5;
console.log(`--- Summing Numbers from 1 to ${n} ---`);
let sum=0;
for(let i=1;i<=n;i++){
    sum+=i;
console.log(`Adding ${i}. Current sum:${sum} `);
}
console.log(`Total sum of first ${n} numbers is: ${sum}`);


// ====================================================================================================================

// Que 3. 	Displaying Progress Bar Segments
// -------
// 	 Render a visual progress bar by displaying a fixed number of segments.

// - The for loop iterates for a predefined number of segments. Each iteration adds one segment, building a visual representation of progress.

// 	Sample input : totalSegments = 5, segmentCharacter = * 
// 	Sample output : --- Rendering Progress Bar ---
// 			Progress: *
// 			Progress: **
// 			Progress: ***
// 			Progress: ****
// 			Progress: *****
// 			--- Progress Bar Complete ---

let totalSegments =5, segmentCharacter = '*' ;

for(let i=1;i<=totalSegments;i++){
    let str = ' ';
    for(let j=1;j<=i;j++){
        str+=segmentCharacter;
    }
    console.log(str);

}

// 	Sample input :  totalSegments = 10, segmentCharacter = =
// 	Sample output :  --- Rendering Progress Bar ---
// 			Progress: =
// 			Progress: ==
// 			Progress: ===
// 			Progress: ====
// 			Progress: =====
// 			Progress: ======
// 			Progress: =======
// 			Progress: ========
// 			Progress: =========
// 			Progress: ==========
// 			--- Progress Bar Complete ---

let totalSegments1 =10, segmentCharacter1 = '=' ;

for(let i=1;i<=totalSegments1;i++){
    let str = ' ';
    for(let j=1;j<=i;j++){
        str+=segmentCharacter1;
    }
    console.log(str);

}


// ===========================================================================================================================


// Que 4.	Basic Password Complexity Checker (Fixed Length)
// ------
// 	 When a user sets a new password, check if it meets minimum complexity rules for a fixed length password, specifically requiring at least one digit and one uppercase letter.

// - The for loop iterates through each character of the passwordString (whose length is known and fixed for this scenario). Inside the loop, if statements check if each character is a digit or an uppercase letter. The counters are updated, and finally, a decision is made based on these counts.

// 	Sample input :	password = Pass123
// 	Sample output: --- Password Complexity Check for 'Pass123' ---
// 			Password strength: Strong (Contains digit and uppercase).
// 			--- Check Complete ---

// 	Sample input : test123
// 	Sample output: --- Password Complexity Check for 'test123' ---
// 			Password strength: Medium (Contains digit and lowercases).
// 			--- Check Complete ---

// 	Sample input : UPPERCASE
// 	Sample output: --- Password Complexity Check for 'UPPERCASE' ---
// 			Password strength: Medium (Contains uppercases).
// 			--- Check Complete ---

// 	Sample input : GoodPass1
// 	Sample output: --- Password Complexity Check for 'GoodPass1' ---
// 			Password strength: Strong (Contains digit and uppercase).
// 			--- Check Complete ---


let password = "12345678";
console.log(`--- Password Complexity Check for '${password}' ---`);
let l=0;
let num=0;
let u=0;




// ===============================================================================================================================

// Que 5.  Estimating Probability with Fixed Number of Trials 
// ------
// 	 Simulate a simple coin toss experiment for a fixed number of trials to estimate the probability of getting heads.

// -  The for loop runs for numberOfTrials. In each iteration, Math.random() simulates a coin toss. It counts the number of "heads" (random number < 0.5), allowing for a simple probability estimation.

// 	Note : using the number of fixed iterations of for loop you have to count the number of heads you got between the 1 to N and calculate the average. generate the random number using the Math.random() function if the generated value id less than 0.5 its heads else its tails if you got the head increment the head count.


// 	Note : Testcases may vary the output will not be same every time because random value will be generated.

// 		sample input : numberOfTrials = 50
// 		sample output:  50 Coin Toss Trials
// 				Total Heads: 19
// 				Estimated Probability of Heads: 38.00%

// 		sample input : numberOfTrials = 1000
// 		sample output:  1000 Coin Toss Trials
// 				Total Heads: 495
// 				Estimated Probability of Heads: 49.50%
let heads=0;
let tails=0;
let noOfTrails =50;

for(let i=0;i<noOfTrails;i++){
   let r =Math.round(Math.random());
  if(r){
    heads++;
  }else{
    tails++;
  }
}
console.log(`${noOfTrails} Coin Toss Trials`);
console.log(`Total Heads: ${heads}`);
console.log(`Estimated Probability of Heads: ${heads/noOfTrails * 100}%`);




// ============================================================================================================================== 
