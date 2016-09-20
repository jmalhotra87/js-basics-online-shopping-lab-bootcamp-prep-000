var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push(`${item}: ${price}`)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {

  if (cart.length === 0) {
    console.log ("Your shopping cart is empty.");
  }else {
    var new_cart = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]){
       new_cart.push(`${item} at $${cart[i][item]}`)


    }
  }

  console.log(`In your cart you have ${new_cart}.`)

}
}