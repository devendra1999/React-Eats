// Interview Questions for FE role

//frequency of fruits
/*
const fruits = ['apple', 'banana', 'apple','apple', 'banana', 'apple'];

const uniqueList = fruits.reduce ((acc, curr) => {
        if(acc[curr]){
            acc[curr] +=1;
        } else {
            acc[curr] = 1;
        }
        return acc
}, [])

*/

/*      OUTPUT BASED QUEST    */
/*
console.log('start');

const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});

const timer1 = setTimeout(() => {
  console.log('timer1')
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)

console.log('end');

*/

//start
  //promise 1
  //promise 2
  //timer2
  //timer1
//end
  
  
// function getArrayData() {
//   var arr = [];
//   for (var index = 1; index <= 5; index++) {
//       arr[index] = A
//       };
//   }
//   return arr;
// }
// var arr = getArrayData();
  
// console.log(arr)
  
// for (var index in arr) {
//     console.log(arr[index]());
// }
  
//   let arr = [1,2,3,4]
// Array.prototype.myReduce = function(func, initialVal){
//   let arr = Object(this);
//   let len = arr.length;
//   let temp = initialVal;
  
//   for(let i = 0; i < len; i++){
//     if(i in arr){
//       temp = func(temp, arr[i])
//     }
//   }
//   return value;
// }

// const studentScores = new Map();

// function newStudent(name, score){
//     studentScores.set(name, score);
// }

// function updateScore(name, score){
//     if(studentScores.has(name)){
//         studentScores.set(name, score)
//     } else {
//         console.log('Student ${name} is not found!')
//     }
// }

// function getScore(name){
//     return studentScores.get(name) || `Student ${name} is not found!`
// }

// function deleteStudent(name){
//     studentScores.delete(name);
// }

/*Create a Map that stores the names of students and their scores. Write functions to:
Add a new student and score.
Update the score of an existing student.
Retrieve the score of a student.
Delete a student from the map.*/

// newStudent('Manish', 99);
// console.log(studentScores);
// newStudent('Piyush', 67);
// updateScore('Manish', 95);
// console.log(getScore('Manish'))
// console.log(studentScores.size)
  
// const arr = [
//     {name : 'A', age : 10},
//     {name : 'B', age : 20},
//     {name : 'C', age : 30},
//     {name : 'D', age : 10},
// ]

// const res = {
//     10 : ['A', 'D'],
//     20 : ['B'],
//     30 : ['C']
// }

// const desiredArr = new Map();

// arr.forEach(person => {
//   if(desiredArr.has(person.age)){
//     desiredArr.get(person.age).push(person.name)
//   } else {
//     desiredArr.set(person.age, [person.name])
//   }
// })

/*
  arr.forEach(person => {
    if(desiredArr.has(person.age)){
      desiredArr.get(person.age).push(person.name)
    } else {
      desiredArr.set(person.age, [person.name])  
    }
      })
*/

// console.log(Object.fromEntries(desiredArr));



/* flatten an array without inbuilt methods */

// const flatten = (arr) => {
//   const result = [];
//   arr.forEach((item) => {
//     if(Array.isArray(item)){
//       result.push(...flatten(item));
//     } else {
//       result.push(item);
//     }
//   })
//   return result;
// }

/*
  const flatten = (arr) => {
    const result= [];

    arr.forEach((item) => {
        if(Array.isArray(item){
          result.push(...flatten(item));
        } else {
         result.push(item);
        }
          )
      })
          return result;
  }
*/

// const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
// console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]



/*  Given an array of numbers, use a Map to count the frequency of each number.
    Return the number that appears the most frequently.*/

// const arr =[1, 2, 2, 3, 3, 3, 4];

// const res = new Map();

// let maxCount = 0;

// let mostFreq; 

// arr.forEach((num) => {
//   let count = res.get(num) + 1 || 1 ;
//   res.set(num, count);
  
//   if(res.get(num) > maxCount){
//       maxCount = res.get(num);
//       mostFreq = num;
//   }
// })

/*
  let res = new Map();

  let mostFreq;

  arr.forEach(num => {
    let count = res.get(num) + 1 || 1;
    res.set(num, count);

    if(res.get(num) > maxCount){
        maxCount = res.get(num);
        mostFreq = num;  
    }
    })

    console.log(mostFreq) ;
*/
  
// console.log(Object.fromEntries(res));
// console.log(mostFreq);



/* Given an array of strings, group the anagrams together using a Map.
Example Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Expected Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] 
*/

// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

// let res = new Map();

// arr.forEach((word) => {
//   const sortedWord = [...word].sort().join('');
//   if(!res.has(sortedWord)){
//           res.set(sortedWord, [])  
//   }
//   res.get(sortedWord).push(word);
// })

// console.log(Array.from(res.values()))


/* 
  Write a function that takes a string paragraph and counts the occurrences of each word using a Map. 
  Ignore punctuation and case sensitivity.
  Example Input: "Hello, world! Hello world."
  Expected Output: { "hello": 2, "world": 2 }
*/

// let str = 'Hello, world! Hello world';

// let res = new Map();

// const keys = str.toLowerCase().replace(/[^\w\s]/g,'').split(/\s+/);

// keys.forEach((word) => {
//     let count = res.get(word) + 1 || 1;
//     res.set(word, count);
// })

// console.log(Object.fromEntries(res))


 /*
  Given a string, use a Map to find the count of each character and return the first character that appears only once.
  Example Input: "swiss"
  Expected Output: 'w'  
 */

      // let str = 'swiss';
    
      // let res = new Map();
    
      // let words = str.split('');
    
      // words.forEach((char) => {
      //   if(!res.has(char)){
      //     res.set(char, 1)
      //   } else {
      //     res.set(char, res.get(char) + 1)
      //   }
      // })
    
      // res.forEach((char, count) => {
      //   if(char === 1){
      //     console.log(count); // w, i
      //   }
      // })


/*
      let str = 'swiss';
    
      let res = new Map();
    
      let words = str.split('');
    
      words.forEach((char) => {
        if(!res.has(char)){
          res.set(char, 1)
        } else {
          res.set(char, res.get(char) + 1)
        }
      })
      
      const obj = Object.fromEntries(res);
    
    for(const [key, value] of Object.entries(obj)){
        if(value === 1){
            console.log(key);
            break;
        }
    }
*/


/*
  Given two arrays, find the common elements using a Map.
  Example Input: [1, 2, 2, 3] and [2, 3, 4]
  Expected Output: [2, 3]
*/
/*
let ar1 = [1, 2, 2, 3] ;
let ar2 = [2, 3, 4];

let map1 = new Map();

let res = []

ar1.forEach(num => map1.set(num,true))

ar2.forEach(num => {
  if(map1.has(num)){
    res.push(num);
    map1.delete(num) // avoid duplicate values
  }
})

console.log(res);

*/

/*
let ar = [
  { id: 1, managerId: null },
  { id: 2, managerId: 1 },
  { id: 3, managerId: 1 },
  { id: 4, managerId: 2 }
];

let res = new Map();

ar.forEach(( employee) => {
  const {id, managerId} = employee;
  if(res.has(managerId)){
    res.get(managerId).push(id);
  } else {
    res.set(managerId, [id])
  }
})

console.log(Object.fromEntries(res));
*/

/*
   Implement a simple cache using Map that stores data for a fixed amount of time. 
   Use setTimeout to expire items in the cache.
   Task: Create functions to add items to the cache, retrieve items, and check if an item is expired.
*/

// class Cache {
//   constructor(timeout) {
//     this.cache = new Map();
//     this.timeout = timeout;
//   }

//   set(key, value) {
//     if (this.cache.has(key)) {
//       clearTimeout(this.cache.get(key).timeoutId);
//     }

//     const timeoutId = setTimeout(() => {
//       this.cache.delete(key);
//     }, this.timeout);

//     this.cache.set(key, { value, timeoutId });
//   }

//   get(key) {
//     const item = this.cache.get(key);
//     return item ? item.value : null;
//   }

//   has(key) {
//     return this.cache.has(key);
//   }
// }

// Test
// const cache = new Cache(5000); // 5 seconds timeout
// cache.set('a', 100);
// console.log(cache.get('a')); // Output: 100
// setTimeout(() => console.log(cache.get('a')), 6000); // Output: null (after 6 seconds)



/*              Order Preservation          */

// function processActions(actionMap) {
//   actionMap.forEach((value, key) => {
//     console.log(`Processing action: ${key} -> ${value}`);
//   });
// }

// // Test
// const actions = new Map();
// actions.set('login', 'User logged in');
// actions.set('view', 'User viewed page');
// actions.set('logout', 'User logged out');

// processActions(actions);

// // Output:
// // Processing action: login -> User logged in
// // Processing action: view -> User viewed page
// // Processing action: logout -> User logged out




/*                           Handling Complex Keys
Use Map to store user sessions where keys are user objects and values are session tokens. 
Handle scenarios where different user objects representing the same user (but not identical objects),
 should still map to the same session.
Example Task: Write a function that normalizes user objects (e.g., by id) to ensure the correct mapping.
*/

  // const sessionMap = new Map();

  // function normalizeUser(user){
  //   return user.id;
  // };

  // function addSession(user, token){
  //   sessionMap.set(normalizeUser(user), token)
  // };

  // function getSession(user) {
  //   return sessionMap.get(normalizeUser(user));
  // }

  // const user1 = {id: 1, name: 'dev'};
  // const user2 = {id: 1, name: 'dev clone'};

  // addSession(user1, 'token123');
  // console.log(getSession(user2))

//   function outer() {
//     let a = 10;
//     function inner(){
//         console.log('a = ', a);
//         let a = 20;
//     }
//     inner();
// }
// outer();

// console.log(1)
// setTimeout(() => console.log(2))
// new Promise(() =>console.log(3))
// console.log(4)


// console.log('1')
// setTimeout(() => console.log('2'))
// new Promise((res, rej) => {
//  console.log('3');
//  res(() => console.log('4'))
// }).then(resolvedValue => {
//  resolvedValue();
// });
// console.log('5')


// (function abc() {
// var a=10;
// })();
// console.log(a);

// function outer() {
//   let a = 10;
//   function inner(){
//       console.log('a = ', a);
//       let a = 20;
//   }
//   inner();
// }
// outer();

// var isAnagram = function(s, t) {
//   if (s.length !== t.length) return false;

//   let mp = new Map();
  
//   for (const char of s) {
//       mp.set(char, (mp.get(char) || 0) + 1);
//   }

//   for (const char of t) {
//       if (!mp.has(char) || mp.get(char) === 0) {
//           return false; 
//       }
//       mp.set(char, mp.get(char) - 1);
//   }

//   return true; 
// };

// console.log(isAnagram("listen", "silent")); // Output: true
// console.log(isAnagram("hello", "bello"));   // Output: false
// console.log(isAnagram("abc", "cba"));       // Output: true // Output: false

// function countSubstringsWithKDistinct(s, k) {
//     let n = s.length;
//     let count = 0;

//     // Helper function to count substrings with at most 'k' distinct characters
//     function countAtMostKDistinct(k) {
//         let left = 0, right = 0, distinctCount = 0;
//         let freqMap = new Map();
//         let subCount = 0;

//         while (right < n) {
//             // Expand the window by including the character at `right`
//             const charRight = s[right];
//             freqMap.set(charRight, (freqMap.get(charRight) || 0) + 1);

//             // If this character is new to the window, increment distinctCount
//             if (freqMap.get(charRight) === 1) {
//                 distinctCount++;
//             }

//             // Shrink the window if the number of distinct characters exceeds 'k'
//             while (distinctCount > k) {
//                 const charLeft = s[left];
//                 freqMap.set(charLeft, freqMap.get(charLeft) - 1);

//                 // If the count of a character goes to zero, it's no longer in the window
//                 if (freqMap.get(charLeft) === 0) {
//                     freqMap.delete(charLeft);
//                     distinctCount--;
//                 }
//                 left++;
//             }

//             // Add the number of substrings ending at `right` with at most 'k' distinct characters
//             subCount += right - left + 1;

//             // Move the right pointer to expand the window
//             right++;
//         }
//         return subCount;
//     }

//     // Count substrings with exactly 'k' distinct characters
//     return countAtMostKDistinct(k) - countAtMostKDistinct(k - 1);
// }

// // Example usage:
// console.log(countSubstringsWithKDistinct("abcba", 2)); // Output: 7
