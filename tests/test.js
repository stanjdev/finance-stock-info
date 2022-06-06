/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { StockInfo } = require('../src/index.js');
require('dotenv').config();

// Insert your RapidApi API Key for testing
const myApiKey = process.env.MYAPIKEY;

const stock = new StockInfo(myApiKey);

test('getStockInfo returns you an object of a given stock ticker', () => {
  stock.getStockInfo('tsla').then((info) => expect(info).toBeInstanceOf(Object));
});

test('getPrice returns you a price string of a given stock ticker', () => {
  stock.getPrice('tsla').then((price) => expect(typeof price).toBe('string'));
});

test('getTotalValue returns you a price number of a given stock ticker and quantity of shares', () => {
  stock.getTotalValue('tsla', 3).then((value) => expect(typeof value).toBe('number'));
});

test('getChangePercent returns you the percent change string of a given stock ticker', () => {
  stock.getChangePercent('twtr').then((percent) => expect(typeof percent).toBe('string'));
});

test('getTradeVolume returns you the trade volume string of a given stock ticker', () => {
  stock.getTradeVolume('twtr').then((volume) => expect(typeof volume).toBe('string'));
});
