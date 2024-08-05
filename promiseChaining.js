const cart = ["jeans123", "pants22", "shirts755"];

createOrder(cart)
.then(function(orderId) {
     console.log(orderId)
    })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    const orderId = cart[0];

    if (!orderId) {
      const err = new Error("Cart is invalid");
      reject(err);
    }

    if (orderId) {
      setTimeout(function(){ 
        resolve(orderId);
        }, 4000);
    } else {
      const err = new Error("Cart is invalid");
      reject(err);
    }
  });
}
