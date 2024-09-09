// Interview Questions for FE role

// const button = document.getElementById('button');

// const divs = document.querySelectorAll('div');

// divs.forEach( div => {
//     div.addEventListener('click', ()=> {
//         console.log('clicked' + div)
//     })
// })

// const arr = [1,2,3,4,5,6,7,8]

// const even = arr.filter( num => {
//     if(num %2 === 0) return num;
// })

// const fruits = ['apple', 'banana', 'apple','apple', 'banana', 'apple'];

// const uniqueList = fruits.reduce ((acc, curr) => {
//         if(acc[curr]){
//             acc[curr] +=1;
//         } else {
//             acc[curr] = 1;
//         }
//         return acc
// }, [])

// button.addEventListener('click', () => {
//     console.log('clicked')
// })

// let sortArr = function(arr){
//     arr.sort();
//     console.log(arr)
// }

// let listArr = arr.reduce( (acc, curr) => {
//   let currentAge = curr.age;
//   if
// },{})

// console.log('start');

// const promise1 = Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
// });

// const timer1 = setTimeout(() => {
//   console.log('timer1')
//   const promise2 = Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)

// console.log('end');

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
    
      res.forEach((char, count) => {
        if(char === 1){
          console.log(count); // w, i
        }
      })
*/

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


