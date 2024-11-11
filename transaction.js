// transaction.js
import { assets, getAssetById } from './Asset.js';

export class Transaction {
  constructor(assetId, type, quantity) {
    this.asset = getAssetById(assetId);
    this.type = type;
    this.quantity = quantity;

    if (type === 'sell' && this.asset.quantity < quantity) {
      throw new Error(`Insufficient quantity for sale of ${this.asset.name}`);
    }
    this.executeTransaction();
  }

  executeTransaction() {
    if (this.type === 'buy') {
      this.asset.quantity += this.quantity;
    } else if (this.type === 'sell') {
      this.asset.quantity -= this.quantity;
    }
  }
}
