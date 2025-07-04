1. **Which of the following is NOT a primitive data type in JavaScript?**

   - A) String
   - B) Boolean
   - C) Array
   - D) Number
   - **Answer:`C`**

2. **What is the typeof null in JavaScript?**

   - A) "null"
   - B) "undefined"
   - C) "object"
   - D) "number"
   - **Answer: `C`**

3. **Which statement correctly declares a variable in JavaScript with block scope?**

   - A) `var x = 10;`
   - B) `let x = 10;`
   - C) `const x;`
   - D) `function x = 10;`
   - **Answer: `B`**

4. **What is the result of `5 + "5"` in JavaScript?**

   - A) 10
   - B) "55"
   - C) 55
   - D) Error

- **Answer:`B`**

5. **Which method adds one or more elements to the end of an array and returns the new length?**

   - A) `push()`
   - B) `concat()`
   - C) `append()`
   - D) `join()`

- **Answer: `A`**

6. **Which operator returns the data type of a variable?**

   - A) dataType
   - B) typeof
   - C) instanceof
   - D) valueof
   - **Answer: `B`**

7. **Which statement is used to execute code based on different conditions?**

   - A) for
   - B) while
   - C) if
   - D) function
   - **Answer: `C`**

8. **What is the correct syntax for a for loop in JavaScript?**

   - A) `for (i = 0; i <= 5)`
   - B) `for i = 1 to 5`
   - C) `for (i = 0; i < 5; i++)`
   - D) `for (i < 5; i++)`
   - **Answer: `C`**

9. **Which statement is used to stop a loop?**

   - A) stop
   - B) return
   - C) break
   - D) exit
   - **Answer: `C`**

10. **How do you access the third element of an array named 'fruits'?**

    - A) `fruits.3`
    - B) `fruits[3]`
    - C) `fruits[2]`
    - D) `fruits(2)`

- **Answer: `C`**

11. **What will be the output of the following code?**

    ```javascript
    let x = 5;
    if (x < 10) {
      console.log("Less than 10");
    } else if (x < 20) {
      console.log("Less than 20");
    } else {
      console.log("Greater than or equal to 20");
    }
    ```

    - A) "Less than 10"
    - B) "Less than 20"
    - C) "Greater than or equal to 20"
    - D) Nothing will be output
    - **Answer: `A`**

12. **Which method removes the last element from an array and returns that element?**

    - A) `pop()`
    - B) `shift()`
    - C) `remove()`
    - D) `delete()`

- **Answer: `A`**

13. **Which statement is used to skip an iteration in a loop?**

    - A) skip
    - B) continue
    - C) next
    - D) pass
    - **Answer: `B`**

14. **What is the output of `[1, 2, 3, 4].map(x => x * 2)`?**

    - A) `[2, 4, 6, 8]`
    - B) `[1, 2, 3, 4, 1, 2, 3, 4]`
    - C) `[1, 4, 9, 16]`
    - D) `8`

- **Answer: `A`**

15. **Which loop will always execute at least once?**

    - A) for loop
    - B) while loop
    - C) do...while loop
    - D) forEach loop
    - **Answer: `C`**

16. **Which method is used to join all elements of an array into a string?**

    - A) `concat()`
    - B) `join()`
    - C) `toString()`
    - D) `merge()`

- **Answer: `C`**

17. **What is the result of `[1, 2, 3].includes(2)`?**

- A) `1`
- B) `true`
- C) `false`
- D) `undefined`

- **Answer: `B`**

18. **What is the output of `[1, 2, 3].reverse()`?**

- A) `[3, 2, 1]`
- B) `[1, 2, 3]`
- C) `3`
- D) A new array with elements in reverse order

- **Answer: `A`**

19. **Which method removes the first element from an array and returns that element?**

- A) `remove()`
- B) `shift()`
- C) `delete()`
- D) `first()`

- **Answer: `B`**

20. **Which array method creates a new array with all elements that pass a test implemented by a provided function?**

- A) `some()`
- B) `every()`
- C) `filter()`
- D) `find()`

- **Answer: `c`**

21. **What is the output of `[1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0)`?**

- A) `10`
- B) `24`
- C) `[1, 2, 3, 4, 0]`
- D) `[10]`
- **Answer:`A`**

22. **Which method adds one or more elements to the beginning of an array and returns the new length?**

- A) `unshift()`
- B) `prepend()`
- C) `insert()`
- D) `addFirst()`
- **Answer: `A`**

23. **Which of the following correctly creates an empty array in JavaScript?**

- A) var arr = []
- B) var arr = {}
- C) var arr = new Array[]
- D) var arr = Array[]

-**Answer:`A` **

24. How do you access the first element of an array named `colors`?

- A) colors(0)
- B) colors[0]
- C) colors.0
- D) colors.first()

**Answer: `B`**

25. How do you find the number of elements in an array?

- A) array.size
- B) array.length
- C) array.count()
- D) array.elements

**Answer: `B`**

26. What does the `reduce()` method do?

- A) Reduces the array to a smaller size
- B) Executes a reducer function on each element, resulting in a single output value
- C) Removes duplicate values from an array
- D) Reduces the array to only truthy values

**Answer:`B`**

27. What will be the output of the following code?

    const numbers = [1, 2, 3];

    numbers.forEach((value, index, array) => {
    console.log(`Value: ${value}, Index: ${index}`);
    });

- A] Value: 1, Index: 0
  Value: 2, Index: 1
  Value: 3, Index: 2
- B] Value: 1, Index: 1
  Value: 2, Index: 2
  Value: 3, Index: 3
- C] Error
- D] No output

**Answer:`A`**

28. What will be the output of the following code?
    const numbers = [10, 5, 100, 2, 1000];
    numbers.sort();
    A] 1000,100,10,5,2
    B] 2,5,10,100,1000
    C] 10,5,100,2,1000
    D] 10,100,1000,2,5
    **Answer:`D`**

29. **What is the difference between `==` and `===` in conditional expressions?**

    - A) `==` compares values only; `===` compares both value and type
    - B) `==` compares types only; `===` compares both value and type
    - C) `==` is deprecated; `===` is the new standard comparison operator
    - D) There is no difference; they are interchangeable
    - **Answer: `a`**

30. **What loop would you use to iterate over the elements of an array?**

    - A) for...in
    - B) while
    - C) for...of
    - D) All of the above can be used
    - **Answer: `D`**
