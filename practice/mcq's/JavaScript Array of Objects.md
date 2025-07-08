**Ques 1 : Listing Products by Category (Array of Objects \& .filter())**

---------



&nbsp;	- Display only the products that belong to a specific category (like "Electronics" or "Clothing") from a list of products on an e-commerce site.



**Description :**

&nbsp;	In many online shopping platforms, users want to see only certain types of products, such as "Electronics" or "Clothing". This can be done by:

&nbsp;		- Storing product details in an array of objects

&nbsp;		- Using .filter() to extract matching products based on category

&nbsp;		- Showing only the name and price of the filtered products

&nbsp;	This exercise helps you learn how to filter an array of objects based on a property value.



**Steps :**

&nbsp;	- Define the list of all products

&nbsp;		Each product is represented by an object with id, name, category, and price properties.

&nbsp;	- Set the category you want to filter by

&nbsp;		You can change this value based on what category the user wants to see.

&nbsp;	- Use .filter() to get products of that category

&nbsp;		.filter() returns a new array with only the items that match the condition.

&nbsp;	- Check if any products were found

&nbsp;		If no products are in that category, show a message.



**Constraints:**

&nbsp;	- Each product object must have a category property (string).

&nbsp;	- The original products array should remain unchanged.



**Test Cases:**



&nbsp;	Input:

&nbsp;		const allProducts = \[

&nbsp;   			{ id: 1, name: "Laptop", category: "Electronics", price: 1200 },

&nbsp;   			{ id: 2, name: "T-Shirt", category: "Clothing", price: 25 },

&nbsp;   			{ id: 3, name: "Smartphone", category: "Electronics", price: 800 }

&nbsp;		];

&nbsp;		 targetCategory = "Electronics";

&nbsp;	Expected Output:

&nbsp;		Filtered Products in Electronics:

&nbsp;			- Laptop ($1200)

&nbsp;			- Smartphone ($800)



&nbsp;	Input: allProducts (same as above), targetCategory = "Books"

&nbsp;	Expected Output: "No products found in category: Books"



=================================================================================================================================================================



**Ques 2 : Updating User Email (Array of Objects \& .find())**

--------

&nbsp;	You're an admin who needs to update a user's email. Given a user's id and a new email, your task is to find the user in the system and update their email directly within the existing array.



**Description :**

&nbsp;	In many systems, users are stored as objects in an array. Each user has properties like id, name, and email

&nbsp;	We’ll use the .find() method to:

&nbsp;		- Search for a user by their id

&nbsp;		- If found, update their email field directly

&nbsp;		- If not found, notify the admin

&nbsp;	.find() returns the actual object, so updating it automatically updates the object inside the array.



**Steps:**

&nbsp;	- Define the Array of Users: Create an array where each element is a user object with id, name, and email properties.

&nbsp;	- Find the User: Use the .find() method to locate the user object whose id matches the target ID.

&nbsp;	- Update Email: If the user is found, update their email property with the new email address.

&nbsp;	- Display Status: Log the original (or modified) array to show the change.

&nbsp;	- use console.table() to print in the table format.



**Constraints:**

&nbsp;	- Each user object must have a unique id (number).

&nbsp;	- The email property must be a string.



Test Cases:



Input:

&nbsp;		const users = \[

&nbsp;   			{ id: 101, name: "Alice", email: "alice@example.com" },

&nbsp;   			{ id: 102, name: "Bob", email: "bob@example.com" }

&nbsp;		];

&nbsp;		targetId = 101;

&nbsp;		newEmail = "alice.updated@example.com";



Expected Output: 

User with ID 101's email is updated. The users array should reflect this change.

Updated Users List:

┌─────────┬─────┬────────┬────────────────────────────┐

│ (index) │ id  │ name   │ email                      │

├─────────┼─────┼────────┼────────────────────────────┤

│    0    │ 101 │ Alice  │ 'alice.updated@example.com'│			  

│    1    │ 102 │ Bob    │ 'bob@example.com'          │

└─────────┴─────┴────────┴────────────────────────────┘





&nbsp;	Input: users (same as above), targetId = 999, newEmail = "nonexistent@example.com"

&nbsp;	Expected Output: "User with ID 999 not found.".



==========================================================================================================================================



**Ques 3 : Sorting Users by Age (Array of Objects \& .sort())**

--------

&nbsp;	Given a list of users with their names and ages, sort the list in ascending order of age — from the youngest to oldest.



**Description :** 

&nbsp;	In real applications like user directories or employee databases, you often need to sort users by a specific property such as age.

&nbsp;	Here you will:

&nbsp;		- Store each user as an object in an array

&nbsp;		- Use .sort() with a custom compare function to order users by age

&nbsp;		- Display the sorted users.

**Steps:**

&nbsp;	- Create an array where each element is a user object with name and age properties.

&nbsp;	- Use the .sort() method, providing a compare function. The compare function should take two user objects (a, b) and return a.age - b.age for ascending order.

&nbsp;	- Log the name and age of each user in the sorted array.



**Constraints:**

&nbsp;	- Each user object must have an age property (number).

&nbsp;	- The .sort() method modifies the original array in place. If you need to preserve the original, make a shallow copy first (e.g., \[...originalArray].sort()).



**Test Cases:**



&nbsp;	Input:

&nbsp;		const users = \[

&nbsp;   			{ name: "Charlie", age: 35 },

&nbsp;   			{ name: "Alice", age: 30 },

&nbsp;   			{ name: "Bob", age: 28 }

&nbsp;		];

&nbsp;	Expected Output:



&nbsp;		Users Sorted by Age (Ascending):

&nbsp;			- Bob (28)

&nbsp;			- Alice (30)

&nbsp;			- Charlie (35)



&nbsp;	Input:

&nbsp;		const users = \[

&nbsp;   			{ name: "David", age: 25 },

&nbsp;   			{ name: "Eve", age: 25 },

&nbsp;   			{ name: "Frank", age: 22 }

&nbsp;		];

&nbsp;	Expected Output: Frank (22), then David (25) and Eve (25) in their original relative order.



===============================================================================================================================================================



**Ques 4 : Getting Names of Products Below a Price (Array of Objects \& .filter(), .map())**

--------

&nbsp;	- You are helping a customer find products under a given price. From a list of products, return only the names of the ones whose price is less than the given amount.



**Description :**

&nbsp;	- Use .filter() to select products below the given price

&nbsp;	- Use .map() to get just the names of those products

&nbsp;	This is a common pattern: filter → then map



**Steps:**



&nbsp;	- Create an array where each element is a product object with name and price properties.

&nbsp;	- Get the maxPrice from the user as input using prompt() function.

&nbsp;	- Use the .filter() method to select products whose price is less than the maxPrice.

&nbsp;	- On the filtered array, use the .map() method to extract only the name of each product.

&nbsp;	- Log the resulting array of product names.



**Constraints:**

&nbsp;	- Each product object must have a price property (number).

&nbsp;	- The original products array should remain unchanged.



**Test Cases:**



&nbsp;	Input:

&nbsp;		const products = \[

&nbsp;   			{ name: "Laptop", price: 1200 },

&nbsp;   			{ name: "Mouse", price: 25 },

&nbsp;   			{ name: "Keyboard", price: 80 },

&nbsp;   			{ name: "Monitor", price: 300 }

&nbsp;		];

&nbsp;		 maxPrice = 100;

&nbsp;	Expected Output: Products under your budget: \["Mouse", "Keyboard"]



&nbsp;	Input: products (same as above), maxPrice = 20

&nbsp;	Expected Output: No products found under that price.



=====================================================================================================================================================================

