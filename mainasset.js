mainasset.js

// asset.js
export const assets = [
  { id: 1, name: 'AAPL', type: 'stock', price: 150, quantity: 10 },
  { id: 2, name: 'TSLA', type: 'stock', price: 800, quantity: 5 },
  { id: 3, name: 'Bonds XYZ', type: 'bond', price: 100, quantity: 20 }
];

export function getAssetById(id) {
  return assets.find(asset => asset.id === id);
}
