const validPin = 1234;


document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = parseInt(document.getElementById('add-amount').value);

    const pin = parseInt(document.getElementById('add-pin').value);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if (accountNumber.length < 11) {
        alert('Please provide a valid account number');
        return;
    }

    if (pin !== validPin) {
        alert("Please provide correct pin");
        return;
    }

    const totalNewAvailableBalance = addAmount + availableBalance;

    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
})