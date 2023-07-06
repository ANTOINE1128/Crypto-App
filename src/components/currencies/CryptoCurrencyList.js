import React from 'react';
import CryptoCurrencyItem from './CryptoCurrencyItem';
import '../../styles/crypto.css';

const CryptoCurrencyList = ({ currencies }) => (
  <>
    <ul className="currency-container">

      {currencies.map((currency) => (
        <CryptoCurrencyItem key={currency.id} currency={currency} />
      ))}

    </ul>
  </>
);

export default CryptoCurrencyList;
