function populateCurrencies(){
    let yourCurrency = document.getElementById("yourCurrencyBtn");
    let convertCurrency = document.getElementById("convertCurrencyBtn");
    
    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
    .then((res) => res.json())
    .then((res) => {
        for(key in res){
            if(res[key] != ""){
                let option_yourCurrency = document.createElement("option");
                option_yourCurrency.value = key;
                option_yourCurrency.innerHTML = res[key];
                yourCurrency.appendChild(option_yourCurrency);
                
                let option_convertCurrency = document.createElement("option");
                option_convertCurrency.value = key;
                option_convertCurrency.innerHTML = res[key];
                convertCurrency.appendChild(option_convertCurrency);
            }
        }
    })
}

function convertCurrency(){
    let amount = document.getElementById("yourAmt").value; // Get user input amount
    if(amount === "" || isNaN(amount)){
        alert("Please enter a valid number.");
        return;
    }
    
    if(document.currencyExchanger.yourCurrencyBtn.value == document.currencyExchanger.convertCurrencyBtn.value){
        alert("You cannot convert to and from the same currency!");
        return;
    }

    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${document.currencyExchanger.yourCurrencyBtn.value}.json`)
    .then((res) => res.json())
    .then((res) => {
        let exchangeRate = res[document.currencyExchanger.yourCurrencyBtn.value][document.currencyExchanger.convertCurrencyBtn.value];
        if(exchangeRate){
            let convertedAmount = amount * exchangeRate;
            document.getElementById("exchange-rate").innerHTML = `${amount} ${document.currencyExchanger.yourCurrencyBtn.value} = ${convertedAmount} ${document.currencyExchanger.convertCurrencyBtn.value}`;
        } else {
            alert("Exchange rate not available for selected currencies.");
        }
    })
}

window.onload = populateCurrencies;
