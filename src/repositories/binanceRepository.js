const result = require("../patterns/result");

const binanceRepository = {
  fetchHistoricalCrypto: async (startTime, endTime, symbol = "ETHBTC") => {
    try {
      const response = await fetch(
        `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1m&startTime=${startTime}&endTime=${endTime}&limit=1000`,
      );
      const data = await response.json();
      return result.onSuccess(parseOutput(data));
    } catch (error) {
      return result.onFailure({
        error,
        message: "Cannot fetch historical data from Binance API",
      });
    }
  },
};

const parseOutput = (data) =>
  data.map((item) => ({
    openTime: item[0],
    openPrice: item[1],
    highPrice: item[2],
    lowPrice: item[3],
    closePrice: item[4],
    volume: item[5],
    closeTime: item[6],
    quoteAssetVolume: item[7],
    numberOfTrades: item[8],
    buyBaseAssetVolume: item[9],
    buyQuoteAssetVolume: item[10],
  }));

module.exports = binanceRepository;
