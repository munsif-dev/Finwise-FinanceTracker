let totalExpense = 0;

function addExpense() {
  // Get the user-entered amount and name
  const expenseAmount = parseFloat(document.getElementById('expenseAmount').value) || 0;
  const expenseName = document.getElementById('expenseName').value;

  // Add the entered amount to the total income
  totalExpense += expenseAmount;

  // Update the total income in the side box with the accumulated amount
  const totalExpenseElement = document.getElementById('totalExpense');
  totalExpenseElement.textContent = '$' + totalExpense.toFixed(2);

  // You can do something with the entered income name here
  console.log('Expense Name:', expenseName);

  // Clear the input fields for the next entry
  document.getElementById('expenseAmount').value = '';
  document.getElementById('expenseName').value = '';
}
