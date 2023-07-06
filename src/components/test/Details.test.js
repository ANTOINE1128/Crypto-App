import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import '@testing-library/jest-dom';
import Details from '../details/Details';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('Details component', () => {
  beforeEach(() => {
    useLocation.mockReturnValue({
      state: {
        currency: {
          id: 1,
          name: 'Bitcoin',
          symbol: 'BTC',
          market_cap_usd: '1000000000',
          volume24h: '500000',
          percent_change_1h: 1.5,
          percent_change_24h: -2.3,
          percent_change_7d: 0.8,
          tsupply: '2000000',
          price_btc: '0.01',
          price_usd: '50000',
        },
      },
    });
  });

  test('displays correct currency name and symbol', () => {
    render(
      <Router>
        <Details />
      </Router>,
    );

    const currencyNameElement = screen.getByText('Bitcoin');
    expect(currencyNameElement).toBeInTheDocument();

    const currencySymbolElement = screen.getByText('BTC');
    expect(currencySymbolElement).toBeInTheDocument();
  });

  test('displays correct market cap value', () => {
    render(
      <Router>
        <Details />

      </Router>,
    );

    const marketCapElement = screen.getByText(/market cap:/i);
    expect(marketCapElement).toBeInTheDocument();
    expect(marketCapElement).toHaveTextContent('$1,000,000,000');
  });

  test('displays correct percent change for 1 hour', () => {
    render(
      <Router>
        <Details />
      </Router>,
    );

    const percentChange1hElement = screen.getByText(/1h %:/);
    expect(percentChange1hElement).toBeInTheDocument();
    expect(percentChange1hElement).toHaveTextContent('1.5%');
  });

  test('displays correct percent change for 24 hours', () => {
    render(
      <Router>
        <Details />
      </Router>,
    );

    const percentChange24hElement = screen.getByText(/24h %:/);
    expect(percentChange24hElement).toBeInTheDocument();
  });

  test('displays correct total supply value', () => {
    render(
      <Router>
        <Details />
      </Router>,
    );

    const totalSupplyElement = screen.getByText(/total supply:/i);
    expect(totalSupplyElement).toBeInTheDocument();
    expect(totalSupplyElement).toHaveTextContent('2,000,000');
  });
});
