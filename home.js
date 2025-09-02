const validPin = 1234;
const transactionData = []

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
    const inputFieldValue = inputField.value;
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

    if (addAmount <= 0) {
        alert("Invalid amount");
        return;
    }

    const pin = getInputValueNumber('add-pin');

    const availableBalance = getInnerText('available-balance');

    if (accountNumber.length !== 11) {
        alert('Please provide 11 digit account number');
        return;
    }

    if (pin !== validPin) {
        alert("Please provide correct pin");
        return;
    }

    const totalNewAvailableBalance = addAmount + availableBalance;

    setInnerText(totalNewAvailableBalance);

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data);
})


//cash out button feature
document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const amount = getInputValueNumber('withdraw-amount');
    const agentNumber = document.getElementById('agent-number').value;
    const CashPin = getInputValueNumber('cash-pin');

    const availableBalance = getInnerText('available-balance');

    if (amount <= 0 || amount > availableBalance) {
        alert("Invalid amount");
        return;
    }

    if (agentNumber.length !== 11) {
        alert('Please provide 11 digit account number');
        return;
    }

    if (CashPin !== validPin) {
        alert("Please provide correct pin");
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount;
    setInnerText(totalNewAvailableBalance);

    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data);

})




//transfer money feature
document.getElementById('transfer-submit-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const amount = getInputValueNumber('transfer-amount');
    const accountNumber = document.getElementById('account1-number').value;
    console.log(accountNumber);
    const TransferPin = getInputValueNumber('transfer-pin');

    const availableBalance = getInnerText('available-balance');

    if (accountNumber.length !== 11) {
        alert('Please provide 11 digit account number');
        return;
    }

    if (TransferPin !== validPin) {
        alert("Please provide correct pin");
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount;
    setInnerText(totalNewAvailableBalance);

    const data = {
        name: "Transfer Money",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data);
})


// pay bill feature
document.getElementById('bill-pay-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const biller = getInputValue('biller');
    const billNumber = document.getElementById('bill-number').value;
    const billAmount = getInputValueNumber('bill-amount');

    const billPin = getInputValueNumber('bill-pin');

    const availableBalance = getInnerText('available-balance');

    if (billNumber.length > 8) {
        alert('Bill number cannot exceed 8 digits');
        return;
    }

    if (billPin !== validPin) {
        alert("Please provide correct pin");
        return;
    }

    const totalNewAvailableBalance = availableBalance - billAmount;

    setInnerText(totalNewAvailableBalance);

    const data = {
        name: "Pay Bill",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data);
})


//Get Bonus feature
document.getElementById('get-bonus-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const coupon = getInputValue('coupon-number');
    console.log(coupon);

    let availableBalance = parseFloat(getInnerText('available-balance'));

    if (coupon === 'PAYOO') {
        const totalNewAvailableBalance = availableBalance + 1000;
        setInnerText(totalNewAvailableBalance);
    }


    else {
        alert("Please provide a valid coupon");
        return;
    }

    const data = {
        name: "Coupon Bonus",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data);
})


//transactions feature
document.getElementById('transactions-button').addEventListener('click', function () {
    const transactionContainer = document.getElementById('transaction-container');
    transactionContainer.innerText = "";

    for (const data of transactionData) {
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="p-3 mt-3 bg-white rounded-xl flex justify-between items-center">
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-[#f4f5f7]">
                        <img src="./assets/wallet1.png" class="mx-auto" alt="" />
                    </div>
                    <div class="ml-3">
                        <h1>${data.name}</h1>
                        <p>${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>`

        transactionContainer.appendChild(div);
    }
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
