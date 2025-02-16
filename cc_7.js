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