// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require("axios");

class StockInfo {
  apiKey: string
  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async getStockInfo(ticker: string): Promise<object> {
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {function: 'GLOBAL_QUOTE', symbol: ticker, datatype: 'json'},
      headers: {
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
        'X-RapidAPI-Key': this.apiKey
      }
    };

    try {
      const response = await axios.request(options);
      return await response.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getPrice(ticker: string): Promise<object> {
    try {
      const stockInfo = await this.getStockInfo(ticker);
      return await stockInfo['Global Quote']['05. price'];
    } catch (err) {
      console.error(err);
    }
  }

  async getTotalValue(ticker: string, quantity: number): Promise<number> {
    try {
      const price = await (this.getPrice(ticker));
      return Number(price) * quantity;
    } catch (err) {
      console.error(err);
    }
  }

  async getChangePercent(ticker: string): Promise<string> {
    try {
      const stockInfo = await this.getStockInfo(ticker);
      return await stockInfo['Global Quote']['10. change percent'];
    } catch (err) {
      console.error(err);
    }
  }

  async getTradeVolume(ticker: string): Promise<string> {
    try {
      const stockInfo = await this.getStockInfo(ticker);
      return await stockInfo['Global Quote']['06. volume'];
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = { StockInfo }
