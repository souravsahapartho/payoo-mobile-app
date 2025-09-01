const validPin = 1234;

//Shared Function
//functions to get input values (Reusable Function)
function getInputValueNumber(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);

    return inputFieldValueNumber;
}

function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.innerText;
    return inputFieldValue;
}


//function to get innerText
function getInnerText(id) {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}

//function to set innertext
function setInnerText(value) {
    const availableBalanceElement = document.getElementById('available-balance');
    availableBalanceElement.innerText = value;
}

//function to toggle
function handleToggle(id) {
    const forms = document.getElementsByClassName('form');

    console.log(forms);

    for (const form of forms) {
        form.style.display = "none";
    }

    document.getElementById(id).style.display = "block";
}

// function to toggle button style
function handleButtonToggle(id) {
    const formbtns = document.getElementsByClassName('form-btn');

    for (const btn of formbtns) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }


    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}




//add money button feature
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const bank = getInputValue('bank');
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = getInputValueNumber('add-amount');

    const pin = getInputValueNumber('add-pin');

    const availableBalance = getInnerText('available-balance');

    if (accountNumber.length < 11) {
        alert('Please provide a valid account number');
        return;
    }

    if (pin !== validPin) {
        alert("Please provide correct pin");
        return;
    }

    const totalNewAvailableBalance = addAmount + availableBalance;

    setInnerText(totalNewAvailableBalance);
})


//cash out button feature
document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const amount = getInputValueNumber('withdraw-amount');
    const agentNumber = document.getElementById('agent-number').value;
    const CashPin = getInputValueNumber('cash-pin');

    const availableBalance = getInnerText('available-balance');

    if (agentNumber.length < 11) {
        alert('Please provide a valid account number');
        return;
    }

    if (CashPin !== validPin) {
        alert("Please provide correct pin");
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount;
    setInnerText(totalNewAvailableBalance);

})





//toggling feature

document.getElementById('add-button').addEventListener('click', function (e) {
    handleToggle('add-money-parent');
    handleButtonToggle('add-button')

})

document.getElementById('cash-out-button').addEventListener('click', function () {
    handleToggle('cash-out-parent');
    handleButtonToggle('cash-out-button');

})

document.getElementById('transfer-button').addEventListener('click', function () {
    handleToggle('transfer-money-parent');
    handleButtonToggle('transfer-button');
})

document.getElementById('bonus-button').addEventListener('click', function () {
    handleToggle('get-bonus-parent');
    handleButtonToggle('bonus-button');
})

document.getElementById('bill-button').addEventListener('click', function () {
    handleToggle('pay-bill-parent');
    handleButtonToggle('bill-button');
})

document.getElementById('transactions-button').addEventListener('click', function () {
    handleToggle('transactions-parent');
    handleButtonToggle('transactions-button');
})