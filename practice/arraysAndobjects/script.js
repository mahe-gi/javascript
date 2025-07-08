const allProducts = [

    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  
    { id: 2, name: "T-Shirt", category: "Clothing", price: 25 },
  
    { id: 3, name: "Smartphone", category: "Electronics", price: 800 }
  
    ];

    let targetCategory = "books";

let a =    allProducts.filter((ele)=>{
        return ele.category == targetCategory;
    })

    a.forEach((e)=>{
        console.log(`${e.name} \$ ${e.price}`);
    })
    if(a.length == 0){
        console.log(`No products found in category: ${targetCategory}`);
        
    }
// 2nd ans

//     const users = [

//         { id: 101, name: "Alice", email: "alice@example.com" },
      
//         { id: 102, name: "Bob", email: "bob@example.com" }
      
//         ];

//         let targetId = 101;

//         let newEmail = "alice.updated@example.com";


//  let a = users.find((e)=>{
//             return e.id == targetId
//         })


//         if(!a){
//             console.table(`User with ID ${targetId} not found.`)
//         }else{
//             console.log(`before upadating`);
//             console.table(users);
            
//             a.email = newEmail
//             console.log(`after upadating`);
//             console.table(users)
//         }


