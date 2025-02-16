//Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount
    return console.log(`Total Invoice: $${total.toFixed(2)}`) //logging the final invoice amount to the console
} // created funcxtion that calculates the final invoice amount

//Task 2: Function Expression
function calculateHourlyWage(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52)
    return console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`) // logging result to the console
}

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