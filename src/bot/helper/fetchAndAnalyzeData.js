const binanceRepository = require("../../repositories/binanceRepository");
const { analyzeData } = require("./analyzeData");
const { log } = require("../../config/logger");

exports.fetchAndAnalyzeData = async (req, res) => {
  const { startTime, endTime, symbol } = req.query;

  const cryptoData = await binanceRepository.fetchHistoricalCrypto(
    Date.parse(startTime),
    Date.parse(endTime),
    symbol,
  );

  if (!cryptoData.isSuccess) {
    log.error({ ctx: cryptoData.error }, cryptoData.error.message);
    return res.status(500).json({
      message:
        "Cannot fetch data from the Binance API. Please check logs for more info",
    });
  }

  const analyzedData = analyzeData(cryptoData.data);

  return res.status(200).json(analyzedData);
};
