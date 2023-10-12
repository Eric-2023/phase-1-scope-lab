// Write your solution in this file!
var customerName = 'bob'
const leastFavoriteCustomer = 'musembi'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
  
  //here there is no return statement
  //if we use `return customerName.toUpperCase()`, it will return 'BOB', but will not redefine the variable.
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
  //here we are able to overwrite the bestCustomer to maybe bob.
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'eric'
  //we are not able change the leastFavoriteCustomer to eric because we have used const.
}