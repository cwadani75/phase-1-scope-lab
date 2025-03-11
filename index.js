// Declare customerName in the global scope
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Declare bestCustomer in global scope and set its value
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'someone';

// Attempt to change leastFavoriteCustomer (should fail)
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'another person'; // This will cause an error
}
