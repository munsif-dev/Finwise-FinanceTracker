let totalIncome = 0;

function addIncome() {
  // Get the user-entered amount and name
  const incomeAmount = parseFloat(document.getElementById('incomeAmount').value) || 0;
  const incomeName = document.getElementById('incomeName').value;

  // Add the entered amount to the total income
  totalIncome += incomeAmount;

  // Update the total income in the side box with the accumulated amount
  const totalIncomeElement = document.getElementById('totalIncome');
  totalIncomeElement.textContent = '$' + totalIncome.toFixed(2);

  // You can do something with the entered income name here
  console.log('Income Name:', incomeName);

  // Clear the input fields for the next entry
  document.getElementById('incomeAmount').value = '';
  document.getElementById('incomeName').value = '';
}
