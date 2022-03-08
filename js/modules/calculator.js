"use strict";

function calc() {
	// getting and adding currencies

	const selectCurrencyOne = document.querySelector(`.select__currency-one`),
		selectCurrencyTwo = document.querySelector(`.select__currency-two`);

	function addCurrencies() {
		fetch(`https://v6.exchangerate-api.com/v6/263b94b9196d22b718bc3c59/latest/USD`)
		.then(response => response.json())
		.then(data => {
			let currencyArray = Object.keys(data.conversion_rates);

			currencyArray.forEach(name => {
				if(name !== `GEL` || name !== `USD`)
					selectCurrencyOne.innerHTML += `<option>${name}</option>`;
					selectCurrencyTwo.innerHTML += `<option>${name}</option>`;
			});
		});
	}

	addCurrencies();

	// calculator logic

	const inputMoneyOne = document.querySelector(`.input__money-one`),
		inputMoneyTwo = document.querySelector(`.input__money-two`);

	function calculate() {
	const moneyCurrencyOne = selectCurrencyOne.value,
			moneyCurrencyTwo = selectCurrencyTwo.value;;

	fetch(`https://v6.exchangerate-api.com/v6/263b94b9196d22b718bc3c59/latest/${moneyCurrencyOne}`)
		.then(response => response.json())
		.then(data => {
			const rate = data.conversion_rates[moneyCurrencyTwo];
			// rateEl.innerText = `1 ${moneyCurrency} = ${rate} ${cryptoCurrency}`;
			inputMoneyTwo.value = (inputMoneyOne.value * rate).toFixed(2);
		});
	}

	selectCurrencyOne.addEventListener(`change`, calculate);
	selectCurrencyTwo.addEventListener(`change`, calculate);
	inputMoneyOne.addEventListener(`input`, calculate);
	inputMoneyTwo.addEventListener(`input`, calculate);
}

calc();

export default calc;