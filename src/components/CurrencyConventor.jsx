import React from "react";
import './CurrencyConvertor.css'

const CurrencyConventor = () => {
  
  return (
    <div className="cur">
      <div class="container">
        <h2>Currency Converter</h2>
        <form>
          <div class="amount">
            <p>Amount</p>
            <input type="text" value="1" />
          </div>
          <div class="convert-box">
            <div class="from">
              <p>From</p>
              <div class="select-input">
                <img src="https://flagcdn.com/48x36/us.png" />
                <select></select>
              </div>
            </div>
            <div class="reverse">
              <i class="fas fa-exchange-alt"></i>
            </div>
            <div class="to">
              <p>To</p>
              <div class="select-input">
                <img src="https://flagcdn.com/48x36/gb.png" />
                <select></select>
              </div>
            </div>
            <div class="result">Getting exchange rate...</div>
            <button>Get Exchange Rate</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CurrencyConventor;
