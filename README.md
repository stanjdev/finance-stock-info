# TS-JS Finance Stock Info Library

Module to retrieve current stock information from [Alpha Vantage API](https://rapidapi.com/alphavantage/api/alpha-vantage/).

## Installation

- Sign up for your own API Key on [Rapid API](https://rapidapi.com/)
- Install it:

```bash
npm i finance-stock-info
```

## Usage

```ts
const { StockInfo } = require('finance-stock-info');

// Insert your RapidApi API Key:
const myApiKey = '<MYAPIKEY>';

// Instantiate a new StockInfo class
const stock = new StockInfo(myApiKey);

// Use these methods to return you a Promise:
stock.getStockInfo('tsla').then((info) => console.log('Info:', info));
// Info: {
//   'Global Quote': {
//     '01. symbol': 'TSLA',
//     '02. open': '729.6750',
//     '03. high': '743.3899',
//     '04. low': '700.2534',
//     '05. price': '703.5500',
//     '06. volume': '37464579',
//     '07. latest trading day': '2022-06-03',
//     '08. previous close': '775.0000',
//     '09. change': '-71.4500',
//     '10. change percent': '-9.2194%'
//   }
// }

stock.getPrice('tsla').then((price) => console.log('Price:', price));
// Price: 703.5500

stock.getTotalValue('tsla', 3).then((value) => console.log('Value:', value));
// Value: 2110.6499999999996

stock.getChangePercent('twtr').then((percent) => console.log('% Change:', percent));
// % Change: 0.6264%

stock.getTradeVolume('twtr').then((volume) => console.log('Volume:', volume));
// Volume: 18269884
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Testing

To run tests:

- Include your API key in the `tests/test.js` file. Then run:

```bash
npm test
```

To check code test coverage:

```bash
npx jest --coverage
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
