const binanceRepository = require("../../src/repositories/binanceRepository.js");

describe("Binance Repository", () => {
  it("should fetch data from the Binance API", async () => {
    const startTime = new Date(2024, 9, 1, 0, 0, 0, 0);
    const endTime = new Date(2024, 10, 1, 0, 0, 0, 0);
    const cryptoData = await binanceRepository.fetchHistoricalCrypto(
      startTime.getTime(),
      endTime.getTime(),
    );

    expect(cryptoData.isSuccess).toBe(true);
    expect(cryptoData.data?.length).toBeGreaterThan(0);
  });
});
