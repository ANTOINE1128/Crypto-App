import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import '../../styles/details.css';

const Details = () => {
  const location = useLocation();
  const { currency } = location.state;

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const renderChange = (value) => {
    const absValue = Math.abs(value);
    const color = value < 0 ? 'red' : 'green';
    return (
      <span style={{ color }}>
        {absValue}
        %
      </span>
    );
  };

  const formatNumber = (value, maximumFractionDigits) => Number(value).toLocaleString(undefined, {
    maximumFractionDigits,
  });

  return (
    <div className="details-container">
      <div
        className="back-arrow"
        onClick={handleBackClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleBackClick();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <BiArrowBack size={32} />
      </div>

      <h1 className="currency-name">{currency.name}</h1>
      <h4 className="currency-symbol">{currency.symbol}</h4>

      <div className="deets-container">
        <h3 className="deets-title">Coin Details:</h3>
        <div>
          <p className="deets">
            Market Cap: $
            {formatNumber(currency.market_cap_usd, 2)}
          </p>
          <p className="deets">
            Volume (24h): $
            {formatNumber(currency.volume24a, 2)}
          </p>
          <p className="deets">
            Total Supply:
            {' '}
            {formatNumber(currency.tsupply, 2)}

          </p>
          <p className="deets">
            1h %:
            {' '}
            {renderChange(currency.percent_change_1h)}
          </p>
          <p className="deets">
            24h %:
            {' '}
            {renderChange(currency.percent_change_24h)}
          </p>
          <p className="deets">
            7d %:
            {' '}
            {renderChange(currency.percent_change_7d)}
          </p>
          <p className="deets">
            Price (BTC):
            {' '}
            {Number(currency.price_btc).toFixed(2)}
          </p>
          <p className="deets">
            Price (USD): $
            {formatNumber(currency.price_usd, 2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
