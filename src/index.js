// ITERATION 1

function updateSubtotal(product) {
  
  const productPrice = product.querySelector('.price span').innerText;
  const productQuantity = product.querySelector('.quantity imput').value;

  let productSubtotal = product.querySelector('.subtotal span');

  let calcSubtotal = productQuantity * productPrice;

  productSubtotal.innerText = calcSubtotal;

  console.log(productSubtotal)

  return calcSubtotal;
  }


// ITERATION 2 & 3

function calculateAll() {
  let total = 0;

  let totalValue = document.querySelector('#total-value span');

  const allProducts = document.querySelectorAll('product');

  allProducts.forEach( (product) => {total += updateSubtotal(product)} );

  totalValue.innerText = total;

  console.log(total)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
