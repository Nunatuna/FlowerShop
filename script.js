amountElement = document.getElementById("amount");
totalElement = document.getElementById("total");
add = document.getElementById("add");
remove = document.getElementById("remove");

// sets the amount of flowers to 0
let amount = 0;
// set the total cost to start at 0
let total = 0;

// the "add" button to add 1 to the amount of flower and 250 to the total price
add.addEventListener("click", () => {
    amount += 1;
    total += 250;

    amountElement.innerHTML = amount + ' stk.';

    totalElement.innerHTML = total + ' kr.';
})

// the remove button to remove 1 from the amount of flowers and removes 250 from the total cost
remove.addEventListener("click", () => {
    // this if statement says that "if the amount is greater than zero, you'll be able to click the remove button"
    if (amount > 0) {

        amount += -1;
        total += -250;
    
        amountElement.innerHTML = amount + ' kr.';
    
        totalElement.innerHTML = total + ' stk.';
    }
})