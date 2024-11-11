// portfolio.js
import { mainasset } from './mainasset.js';

export function calculatePortfolioValue() {
  return mainasset.reduce((total, mainasset) => total + mainasset.price * mainasset.quantity, 0);
}

export function getPortfolioAllocation() {
  const totalValue = calculatePortfolioValue();
  return mainasset.map(asset => ({
    name: mainasset.name,
    allocation: ((mainasset.price * mainasset.quantity) / totalValue * 100).toFixed(2) + '%'
  }));
}

