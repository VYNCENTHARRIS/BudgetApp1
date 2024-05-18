let budget = 0; // Initialize the budget variable to store the user's budget amount
let totalExpenses = 0; // Initialize the totalExpenses variable to store the sum of all expenses

// Function to set the budget
function setBudget() {
    // Retrieve the value from the budget input field and parse it as a floating point number
    budget = parseFloat(document.getElementById('budget').value);

    // Check if the budget value is a valid number and greater than zero
    if (isNaN(budget) || budget <= 0) {
        alert("Please enter a valid budget amount.");
        budget = 0; // Reset budget to zero if input is invalid
    }

    // Update the budget display with the formatted budget value
    document.getElementById('budget-value').textContent = budget.toFixed(2);

    // Recalculate and update the remaining budget
    updateRemainingBudget();
}

// Function to add an expense
function addExpense() {
    // Retrieve the expense amount from the input field and parse it as a floating point number
    const expenseAmount = parseFloat(document.getElementById('expense').value);

    // Retrieve the expense description from the input field and trim any leading/trailing whitespace
    const expenseName = document.getElementById('expense-name').value.trim();

    // Validate the expense amount and description
    if (isNaN(expenseAmount) || expenseAmount <= 0 || expenseName === "") {
        alert("Please enter a valid expense amount and description.");
        return; // Exit the function if inputs are invalid
    }

    // Update the total expenses by adding the new expense amount
    totalExpenses += expenseAmount;

    // Update the total expenses display with the formatted value
    document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);

    // Recalculate and update the remaining budget
    updateRemainingBudget();

    // Add the expense to the expense list
    const expenseList = document.getElementById('expense-list'); // Get the expense list element
    const listItem = document.createElement('li'); // Create a new list item element
    listItem.textContent = `${expenseName}: $${expenseAmount.toFixed(2)}`; // Set the list item's text with the expense name and formatted amount
    expenseList.appendChild(listItem); // Append the list item to the expense list

    // Clear the input fields for the next expense entry
    document.getElementById('expense').value = "";
    document.getElementById('expense-name').value = "";
}

// Function to update the remaining budget
function updateRemainingBudget() {
    // Calculate the remaining budget by subtracting total expenses from the budget
    const remainingBudget = budget - totalExpenses;

    // Update the remaining budget display with the formatted value
    document.getElementById('remaining-budget').textContent = remainingBudget.toFixed(2);
}

// Add an event listener to set the budget when the input value changes
document.getElementById('budget').addEventListener('input', setBudget);
