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


// const arr = [
//     {name : 'A', age : 10},
//     {name : 'B', age : 20},
//     {name : 'C', age : 30},
//     {name : 'D', age : 10},
// ]

// {
//     10 : ['A', 'D'],
//     20 : ['B'],
//     30 : ['C']
// }

// let listArr = arr.reduce( (acc, curr) => {
//   let currentAge = curr.age;
//   if
// },{})






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
  
  
  
  
  
  
  