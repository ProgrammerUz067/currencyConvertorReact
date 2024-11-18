import React from "react";
import "./CurrencyConventor.css";

const CurrencyConventor = () => {
  const BASE_URL =
    "https://v6.exchangerate-api.com/v6/3b80f1790c1d56d14c5d702c/latest/";

  const dropdowns = document.querySelectorAll(".dropdown select");
  const btn = document.querySelector("form button");
  const fromCurr = document.querySelector(".from select");
  const toCurr = document.querySelector(".to select");
  const msg = document.querySelector(".msg");

  for (let select of dropdowns) {
    for (currCode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      if (select.name === "from" && currCode === "USD") {
        newOption.selected = "selected";
      } else if (select.name === "to" && currCode === "INR") {
        newOption.selected = "selected";
      }
      select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
      updateFlag(evt.target);
    });
  }

  const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
    let selectElement = document.querySelector("#ss");
    let dropdown = selectElement.value;
    // document.querySelector('.dropdown').textContent = dropdown;

    //const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(BASE_URL + dropdown);
    let data = await response.json();
    let rate = data.conversion_rates[toCurr.value];

    let finalAmount = (amtVal * rate).toFixed(2);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  };

  const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  };

  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
  });

  window.addEventListener("load", () => {
    updateExchangeRate();
  });

  return (
    <div>
      <div class="contain">
        <h2 class="heading">Currency Converter</h2>
        <hr />
        <div class="container">
          <form>
            <div class="amount">
              <p>Enter Amount</p>
              <input value="1" type="text" />
            </div>
            <div class="dropdown">
              <div class="from">
                <p>From</p>
                <div class="select-container">
                  <img src="https://flagsapi.com/US/flat/64.png" />
                  <select name="from" id="ss"></select>
                </div>
              </div>
              <i class="fa-solid fa-arrow-right-arrow-left"></i>
              <div class="to">
                <p>To</p>
                <div class="select-container">
                  <img src="https://flagsapi.com/IN/flat/64.png" />
                  <select name="to"></select>
                </div>
              </div>
            </div>
            <button>Get Exchange Rate</button>
          </form>
        </div>
        <div class="msg">1USD = 80INR </div>
      </div>
    </div>
  );
};

export default CurrencyConventor;
