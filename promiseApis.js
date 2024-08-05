const p1 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("success p1"), 1000)
})

const p2 = new Promise ((resolve,reject) => {
    setTimeout (() => resolve("success p2"),2000)
})

const p3 = new Promise ((resolve, reject) => {
    setTimeout (() => resolve("success p3"), 3000)
})

Promise.all([p1, p2, p3])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err)
    })

//Promise.allSettled => safest one because it return the object of all the results

//Promise.race => it returns fastest result whether its settled as fulfilled or rejected

//Promise.any => it will wait for first settled success/ fulfilled/ resolved and ignore the failure/ rejected/ reject

//promise.any => will return an aggregate error if all promises are rejected

//catch statement for promise.any => err.errors