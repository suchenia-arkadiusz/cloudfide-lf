const binanceRepository = require("./repositories/binanceRepository.js");
const { analyzeData } = require("./bot/analyzeData");

const main = async () => {
  if (process.argv.length < 4) {
    console.error(
      "Please run this app with at least 2 arguments: <start time ISO format (required)> <end time" +
        " ISO format (required)> <symbol (optional)>",
    );
    process.exit(0);
  }

  const startTime = Date.parse(process.argv[2]);
  const endTime = Date.parse(process.argv[3]);
  const symbol = process.argv[4];

  const cryptoData = await binanceRepository.fetchHistoricalCrypto(
    startTime,
    endTime,
    symbol,
  );

  if (!cryptoData.isSuccess) {
    console.error(cryptoData.error);
  }

  const analyzedData = analyzeData(cryptoData.data);

  console.log(JSON.stringify(analyzedData, null, 2));
};

main();
