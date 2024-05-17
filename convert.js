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
    if(document.currencyExchanger.yourCurrencyBtn.value == document.currencyExchanger.convertCurrencyBtn.value){
        alert("You cannot convert to and from the same currency!")
        return;
    }

    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${document.currencyExchanger.yourCurrencyBtn.value}.json`)
    .then((res) => res.json())
    .then((res) => {
        document.getElementById("exchange-rate").innerHTML = "1 " + 
            document.currencyExchanger.yourCurrencyBtn.value + " = " + 
            res[document.currencyExchanger.yourCurrencyBtn.value][document.currencyExchanger.convertCurrencyBtn.value] + 
            " " + document.currencyExchanger.convertCurrencyBtn.value

        

    })

}

window.onload = populateCurrencies;