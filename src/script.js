let total = 0;

function addExpense() {
    const title = document.getElementById('title').value;
    const amount = parseInt(document.getElementById('amount').value);

    if (!title || !amount) {
        alert("Please enter valid details");
        return;
    }

    const list = document.getElementById('expense-list');
    const item = document.createElement('li');
    item.innerText = `${title} - ₹${amount}`;
    list.appendChild(item);

    total += amount;
    document.getElementById('total').innerText = total;

    document.getElementById('title').value = "";
    document.getElementById('amount').value = "";
}
