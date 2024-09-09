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
  
//   // 1 ,2 ,3, 4, 5
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

// flatten an array without inbuilt methods

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

const arr =[1, 2, 2, 3, 3, 3, 4];

const res = new Map();

arr.forEach((num) => {
  
})
  