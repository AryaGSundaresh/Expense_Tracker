let total = 0;

// Function to update the displayed total
function updateTotal() {
    document.getElementById('total').innerText = total;
}

// Function to handle adding a new expense
function addExpense() {
    const titleInput = document.getElementById('title');
    const amountInput = document.getElementById('amount');
    
    const title = titleInput.value.trim();
    // Use parseFloat for amount to handle decimals, but keep display as integer for simplicity
    const amount = parseInt(amountInput.value); 

    if (!title) {
        alert("Please enter a valid expense title.");
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid, positive amount.");
        return;
    }

    const list = document.getElementById('expense-list');
    const item = document.createElement('li');
    
    // Store the amount directly on the list item for easy retrieval during deletion
    item.setAttribute('data-amount', amount);
    
    // Create the inner HTML with the delete button
    item.innerHTML = `
        <div class="expense-info">
            <span class="expense-title">${title}</span>
            <span class="expense-amount">₹${amount}</span>
        </div>
        <button class="delete-btn" onclick="deleteExpense(this)">✖</button>
    `;
    
    list.appendChild(item);

    // Update total
    total += amount;
    updateTotal();

    // Clear inputs
    titleInput.value = "";
    amountInput.value = "";
}


// Function to handle deleting an expense
function deleteExpense(deleteButton) {
    // Get the parent <li> element
    const item = deleteButton.parentNode;
    
    // Get the stored amount
    const amountToRemove = parseInt(item.getAttribute('data-amount'));

    // Remove the amount from the total
    total -= amountToRemove;
    updateTotal();
    
    // Remove the list item from the DOM
    item.remove();
}

// Ensure the initial total is correct (mostly for setup)
updateTotal();