// Ques 1 : Shopping Cart Management
// --------
// 	- Develop a simple online shopping cart functionality where users can add items, remove the last added item, and view all items currently in their cart.

// Description : 
// 	This is a core feature of any e-commerce website. A shopping cart needs to dynamically manage a list of products. We'll use array methods to simulate adding (push), removing (pop), and listing items.

// Steps:

// 	- Initialize Cart: Create an empty array called shoppingCart.

let shoppingCart =[];

// 	- Add Item Function: Create a function addItemToCart that takes an itemName and adds it to shoppingCart using push().

function addItemToCart(itemName){
    shoppingCart.push(itemName);

}

// 	- Remove Last Item Function: Create a function removeLastItemFromCart that removes the last item using pop() and informs the user. Handle the case where the cart is empty.

function removeLastItemFromCart(){
    shoppingCart.pop();
    
}

// 	- View Cart Function: Create a function viewCart that iterates through shoppingCart and logs each item. If the cart is empty, log an appropriate message.

function viewCart(){

    addItemToCart("tubelight")
    addItemToCart("light")
    removeLastItemFromCart()

    if(!shoppingCart.length){
        console.log("empty");
    }else{
        for (const element of shoppingCart) {
            console.log(element);
            
        }
    }

}
viewCart();
// Test Cases :
	
// 	Perform the insertion and deletion operations on array using the above functions and array methods and generate dynamic output.








// =============================================================================================================================================

// Ques 2 : Student Gradebook - Calculate Average (Without predefined functions)
// --------
// 	- For a student, a list of their numerical grades for different assignments is available. Create a function to calculate the average score from this list of grades.

// Description :
// 	In an educational system, calculating averages from a series of scores is a very common requirement. This involves iterating through the array, summing the values, and then 	dividing by the count.

// Steps:

// 	- Define Grades Array: Create an array studentGrades with numerical values.

// 	- Calculate Average Function: Create a function calculateAverageGrade that takes an array of grades.

// 	- Summation: Initialize a totalScore to 0. Use a for loop to iterate through the grades array and add each grade to totalScore.

// 	- Average Calculation: Divide totalScore by grades.length. Handle the case of an empty array to avoid division by zero.

// 	- Return Value: Return the calculated average.

// Test Cases :
	
// 	Sample input : aliceGrades = [85, 90, 78, 92, 88]
// 	Sample output : 86.6

// 	Sample input : bobGrades = [60, 70, 65]
// 	Sample Output : 65
// 

let aliceGrades = [85, 90, 78, 92, 88];
let totalScore =0;

let calculateAverageGrade =(arr)=>{
    if(!arr.length){
        return false;
    }
    for (const element of aliceGrades) {
        totalScore+=element;
    }
let avg = totalScore/aliceGrades.length
return avg

}

let ans =calculateAverageGrade(aliceGrades);
console.log(ans);

// ================================================================================================================================================

// Ques 3 : Inventory Stock Checker (Item Existence) (without predefined functions)
// --------
// 	-  In an inventory system, given a list of available product names, create a function to check if a specific product is currently in stock.

// Description :
// Before allowing a customer to purchase an item, an e-commerce platform needs to verify its availability. This function uses efficient array methods to search for the presence of a specific string.

// Steps:

// 	- Define Inventory Array: Create an array availableProducts with string names of products.
let availableProducts = ["Laptop", "Smartphone", "Keyboard", "Mouse", "Monitor", "Webcam"];


// 	- Check Stock Function: Create a function isProductInStock that takes a productName.
let isProductInStock = (productName)=>{
    let val =availableProducts.includes(productName);
    // return val
    console.log(`Is '${productName}' in stock? ${val}`)

}
console.log(isProductInStock("Laptop"))

// 	- Check Existence: Use availableProducts.includes(productName) or availableProducts.indexOf(productName) !== -1 to check if the product name exists in the array.

// 	- Return Value: Return true if in stock, false otherwise.

// Test Cases : 

// 	Sample Input : availableProducts = ["Laptop", "Smartphone", "Keyboard", "Mouse", "Monitor", "Webcam"];
// 	Sample Output : Is 'Laptop' in stock? true

// 	Sample Input : availableProducts = ["Laptop", "Smartphone", "Keyboard", "Mouse", "Monitor", "Webcam"];
// 	Sample Output : 'Headphones' in stock? false

// ===============================================================================================================================================

// Ques 4 : Image Gallery Navigator (without predefined functions)
// --------
// 	- In an image gallery application, you have a list of image file names. Create a function that, given the currentImageName, returns the name of the "next" or "previous" image in 	  the gallery. Handle wrapping around (first image after last, last image before first).

// Description :
// 	User interfaces for galleries or carousels need to navigate through a sequence. This function demonstrates finding an item's index, performing arithmetic, and handling boundary 	conditions (wrapping around the array).

// Steps:

// 	- Define Image Names Array: Create an array imageNames with string image file names.

let imageNames = ["image1.jpg", "image2.png", "image3.gif", "image4.jpeg", "image5.bmp"];
// 	- Navigation Function: Create a function MapsGallery that takes currentImageName and direction ("next" or "previous").


// 	- Find Current Index: Use imageNames.indexOf(currentImageName). If not found, return an error.

// Calculate New Index:

// 	 - If direction is "next": newIndex = currentIndex + 1. If newIndex is imageNames.length, wrap to 0.

// 	 - If direction is "previous": newIndex = currentIndex - 1. If newIndex is -1, wrap to imageNames.length - 1.

// 	 - Return Value: Return the imageNames[newIndex].


let MapsGallery = (currentImageName, dir) => {
    let currentIndex = imageNames.indexOf(currentImageName);

    if (currentIndex === -1) {
        return `Error: Current image '${currentImageName}' not found in gallery.`;
    }

    let newIndex;

    if (dir === "next") {
        newIndex = (currentIndex + 1) % imageNames.length;
    } else if (dir === "previous") {
        newIndex = (currentIndex - 1 + imageNames.length) % imageNames.length;
    } else {
        return "Error: Direction must be 'next' or 'previous'.";
    }

    return `Current: ${imageNames[newIndex]}`;
};


// Test Cases :

console.log(MapsGallery("image1.jpg", "next"));       
console.log(MapsGallery("image5.bmp", "next"));       
console.log(MapsGallery("image1.jpg", "previous"));  
console.log(MapsGallery("nonExistent.jpg", "next"));  
	
// 	Sample input :  imageNames = ["image1.jpg", "image2.png", "image3.gif", "image4.jpeg", "image5.bmp"];
// 	Sample Output : Current: image1.jpg

// 	Sample input : imageNames = ["image1.jpg", "image2.png", "image3.gif", "image4.jpeg", "image5.bmp"];
// 	Sample Output : Error: Current image 'nonExistent.jpg' not found in gallery.


// 
// ======================================================================================================================================================