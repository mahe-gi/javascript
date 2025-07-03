// Ques 1 : Checking if a Shopping List is Empty (.length)
// --------

// 	- You have a shopping list. Before heading to the store, you want to quickly check if there are any items on the list or if it's completely empty.

// Description :
// 	This uses the fundamental length property of an array. The length property returns the number of elements in the array. An empty array will have a length of 0.

// Steps :

// 	- Define the Array: Create a JavaScript array, either empty or with items.

// 	- Check Length: Access the length property of the array.

// 	- Conditional Logic: Use an if/else statement to determine if the length is 0 and print a corresponding message.

// Constraints:

// 	- The array will contain strings representing items.

// 	- No specific constraint on item values, only on the array's emptiness.

// Test Cases:
// 	Input: const shoppingList = []
// 	Expected Output: "Your shopping list is empty."

// 	Input: const shoppingList = ["Milk", "Eggs", "Bread"];
// 	Expected Output: "You have items on your shopping list."

// ============================================================================================================================================================

// Ques 2 : Combining Two Lists (.concat())
// ---------
// 	You have a list of ingredients for a main course and another list for a dessert. You want to create a single, combined list of all ingredients needed for a meal preparation.

// Description :
// 	The .concat() method is used to merge two or more arrays. It returns a new array, containing the elements of the original arrays, without modifying the original arrays.

// Steps :

// 	- Define Source Arrays: Create two separate arrays of ingredients.
// 	- Concatenate Arrays: Use the .concat() method on one array, passing the other array(s) as arguments.
// 	- Display Combined List: Log the newly created combined array.

// Constraints:
// 	- Arrays contain strings.
// 	- The original arrays should remain unchanged.

// Test Cases:

// 	Input: mainCourse = ["Chicken", "Rice", "Broccoli"], dessert = ["Flour", "Sugar", "Eggs"]
// 	Expected Output: ["Chicken", "Rice", "Broccoli", "Flour", "Sugar", "Eggs"]

// 	Input: mainCourse = ["Pasta", "Sauce"], dessert = []
// 	Expected Output: ["Pasta", "Sauce"]
// =============================================================================================================================================================

// Ques 3 : Finding an Item's Position (.indexOf())
// --------
// 	- You have a list of students in a class. You need to quickly find out where a specific student is located in the list to determine their seating order or to update their record.

// Description :
// 	- The .indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. It performs a strict equality comparison (===).

// Steps :
// 	- Define the Array: Create an array of student names.
// 	- Search for Element: Call .indexOf() on the array, passing the student name you're looking for.
// 	- Handle Result: Use an if/else statement to check if the returned index is -1 (not found) or a valid index, and display an appropriate message.

// Constraints:
// 	- Array elements are strings.
// 	- Case-sensitive search.

// Test Cases:

// 	Input: const students = ["Alice", "Bob", "Charlie", "David"];, Search for "Charlie"
// 	Expected Output: "Charlie is at position: 2"

// 	Input: const students = ["Alice", "Bob", "Charlie", "David"];, Search for "Eve"
// 	Expected Output: "Eve is not found in the list."

// 	Input: const students = ["alice", "Bob"];, Search for "Alice"
// 	Expected Output: "Alice is not found in the list." (because of 'a' vs 'A')

// ===============================================================================================================================================================

// Ques 4 : Joining Array Elements into a String (.join())
// ---------

// 	You have a list of tags associated with a blog post (e.g., "JavaScript", "Web Development", "Tutorial"). You want to display these tags as a comma-separated string on the webpage.

// Description :
// 	The .join() method creates and returns a new string by concatenating all of the elements in an array, separated by a specified separator string. If no separator is provided, a 	comma (,) is used by default.

// Steps :

// 	- Define the Array: Create an array of strings (tags).
// 	- Join Elements: Call the .join() method on the array, optionally passing a separator string (e.g., ", ").
// 	- Display Result: Log the resulting string.

// Constraints:
// 	- Array elements are strings.

// Test Cases:

// 	Input: const tags = ["JavaScript", "Web Development", "Tutorial"];
// 	Expected Output: "JavaScript, Web Development, Tutorial"

// 	Input: const words = ["hello", "world"];
// 	Expected Output: "hello-world"

// 	Input: const emptyArray = [];
// 	Expected Output: "" (an empty string)

// ==================================================================================================================================================================

// Ques 5 : Checking for Item Existence (.includes())
// --------

// 	Before adding a new user to a database, you want to quickly check if a username already exists to prevent duplicates.

// Description :
// 	The .includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. It's often more readable than indexOf() !	== -1 when you only care about existence.

// Steps:

// 	- Define the Array: Create an array of existing usernames.
// 	- Check for Existence: Use the .includes() method, passing the username to check.
// 	- Conditional Logic: Based on the boolean result, print whether the username is available or taken.

// Constraints:
// 	- Array elements are strings.
// 	- Case-sensitive search.

// Test Cases:

// 	Input: const existingUsernames = ["admin", "user123", "guest"];, Check for "user123"
// 	Expected Output: "Username 'user123' is already taken."

// 	Input: const existingUsernames = ["admin", "user123", "guest"];, Check for "newUser456"
// 	Expected Output: "Username 'newUser456' is available."

// 	Input: const existingUsernames = ["john", "jane"];, Check for "John"
// 	Expected Output: "Username 'John' is available."

// ============================================================================================================================================================

// Ques 6 : Converting String to Array (.split())

// 	You receive a string of data where values are separated by a delimiter (e.g., a comma-separated list of names: "Alice,Bob,Charlie"). You need to convert this string into an array 	of individual names for easier processing.

// Description :
// 	While not strictly an array method (it's a string method), .split() is fundamentally important when working with arrays because it's the primary way to convert a delimited string 	into an array. It divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.

// Steps:
// 	- Define the String: Create a string with elements separated by a known delimiter.
// 	- Split the String: Call the .split() method on the string, passing the delimiter as an argument.
// 	- Display Result: Log the newly created array.

// Constraints:
// 	- The string must contain a consistent delimiter if you want consistent splitting.

// Test Cases:

// 	Test Case 1: Split by comma
// 		Input: "apple,banana,orange
// 		Expected Output: ["apple", "banana", "orange"]

// 	Test Case 2: Split by space
// 		Input: "one two three"
// 		Expected Output: ["one", "two", "three"]

// 	Test Case 3: Split by empty string (each character)
// 		Input: "hello"
// 		Expected Output: ["h", "e", "l", "l", "o"]

// 	Test Case 4: Split an empty string
// 		Input: ""
// 		Expected Output: [""]

// =====================================================================================================================================================

// Ques 7 :	Displaying All Usernames (.forEach())
// --------
// 	- You have a list of registered usernames in your system. You need to display each username in the console or on a webpage to quickly see all active users.

// Description :
// 	The .forEach() method executes a provided function once for each array element. It's a simple and readable way to iterate over an array when you want to perform an action for every 	item without needing to build a new array or stop early.

// Steps :
// 	- Define the Array: Create an array of usernames.
// 	- Iterate and Display: Use the .forEach() method, providing a callback function that takes each username as an argument. Inside the callback, print the username.

// Constraints:
// 	- Array elements are strings.

// Test Cases:

// 	Input: const users = ["alice", "bob_dev", "charlie_admin"];
// 	Expected Output:
// 		"User: alice
// 		"User: bob_dev"
// 		"User: charlie_admin"

// 	Input: const emptyUsers = [];
// 	Expected Output: No output, or a message indicating no users.

// ===========================================================================================================================================================
