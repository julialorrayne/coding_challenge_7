//Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount
    return console.log(`Total Invoice: $${total.toFixed(2)}`) //logging the final invoice amount to the console
} // created funcxtion that calculates the final invoice amount

//Task 2: Function Expression
function calculateHourlyWage(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52)
    return console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`) // logging result to the console
}; // created function that calculates the hourly wage based on the salary and hours per week

//Task 3: Arrow Function
const calculateLoyaltyDiscount = (amount,years) => {
    let discount = 0
    if (years >=5) {
        discount = amount * 0.15
    }
    else if (years >=3 && years <5) {
        discount = amount * 0.1
    }
    else {
        discount = amount * 0.05
    }
    let discountedPrice = amount - discount  //calculates the discounted price
    return console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`)
}; //arrow function calculateLoyaltyDiscount(amount, years) with the following conditions:
//years >= 5: 15% discount
//years >= 3: 10% discount
//years < 3: 5% discount

//Task 4: Parameters and Arguments
function calculateShippingCost(weight,location, expedited = false) {
    let shippingCost = 0
    if (location === 'USA' && expedited) {
        shippingCost = 5 + (0.5 * weight) + 10
    }
    else if (location === 'USA' && !expedited){
        shippingCost = 5 + (0.5 * weight)
    }
    else if (location === 'Canada' && expedited){
        shippingCost = 10 + (0.7 * weight)
    }
    else if (location === 'Canada' && !expedited){
        shippingCost = 10 + (0.7 * weight)
    }

    return console.log(`Shipping Cost: $${shippingCost.toFixed(2)}`)
};
//wrote a function calculateShippingCost(weight, location, expedited = false) to calculate shipping fees
// based on the following conditions:
//USA: $5 + $0.5 per lb
//Canada: $10 + $0.7 per lb
//Expedited shipping: additional $10 fee

//Task 5: Returning Values
function calculateLoanInterest(principal, rate,years) {
    let interest = principal * rate * years
    return console.log (`Total interest: $${interest.toFixed(2)}`)
};
//created function calculateLoanInterest that returns total interest using the formula:
//Interest = Principal * Rate * Years