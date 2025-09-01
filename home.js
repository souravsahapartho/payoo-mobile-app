const validPin = 1234;


//function to get input values (Reusable Function)
function getInputValueNumber(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);

    return inputFieldValueNumber;
}

//add money button feature
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = getInputValueNumber('add-amount');

    const pin = getInputValueNumber('add-pin');

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


//cash out button feature
document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const amount = getInputValueNumber('withdraw-amount');
    const agentNumber = document.getElementById('agent-number').value;
    const CashPin = getInputValueNumber('cash-pin');

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if (agentNumber.length < 11) {
        alert('Please provide a valid account number');
        return;
    }

    if (CashPin !== validPin) {
        alert("Please provide correct pin");
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount;

    document.getElementById('available-balance').innerText = totalNewAvailableBalance;

})



//toggling feature

document.getElementById('add-button').addEventListener('click', function () {
    document.getElementById('cash-out-parent').style.display = "none";

    document.getElementById('add-money-parent').style.display = "block";
})

document.getElementById('cash-out-button').addEventListener('click', function () {
    document.getElementById('add-money-parent').style.display = "none";

    document.getElementById('cash-out-parent').style.display = "block";
})