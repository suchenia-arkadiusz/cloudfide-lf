const { analyzeData } = require("../../src/bot/helper/analyzeData");
describe("Analyze data", () => {
  it("should analyze data and return the values", () => {
    const mockedData = [
      {
        openTime: 1727746680000,
        openPrice: "0.04128000",
        highPrice: "0.04129000",
        lowPrice: "0.04128000",
        closePrice: "0.04128000",
        volume: "0.33860000",
        closeTime: 1727746739999,
        quoteAssetVolume: "0.01397773",
        numberOfTrades: 14,
        buyBaseAssetVolume: "0.03710000",
        buyQuoteAssetVolume: "0.00153185",
      },
      {
        openTime: 1727746740000,
        openPrice: "0.04128000",
        highPrice: "0.04128000",
        lowPrice: "0.04126000",
        closePrice: "0.04128000",
        volume: "21.33330000",
        closeTime: 1727746799999,
        quoteAssetVolume: "0.88048809",
        numberOfTrades: 97,
        buyBaseAssetVolume: "0.58620000",
        buyQuoteAssetVolume: "0.02419372",
      },
      {
        openTime: 1727746560000,
        openPrice: "0.04130000",
        highPrice: "0.04130000",
        lowPrice: "0.04129000",
        closePrice: "0.04130000",
        volume: "6.09300000",
        closeTime: 1727746619999,
        quoteAssetVolume: "0.25162821",
        numberOfTrades: 15,
        buyBaseAssetVolume: "4.82810000",
        buyQuoteAssetVolume: "0.19940053",
      },
      {
        openTime: 1727746620000,
        openPrice: "0.04129000",
        highPrice: "0.04129000",
        lowPrice: "0.04129000",
        closePrice: "0.04129000",
        volume: "6.30890000",
        closeTime: 1727746679999,
        quoteAssetVolume: "0.26049428",
        numberOfTrades: 56,
        buyBaseAssetVolume: "0.00000000",
        buyQuoteAssetVolume: "0.00000000",
      },
    ];

    const analyzedData = analyzeData(mockedData);

    expect(analyzedData).not.toBeNull();
    expect(analyzedData.min).toBe(0.04126);
    expect(analyzedData.max).toBe(0.0413);
    expect(analyzedData.percentageDifference).toBe(0.09694619486186455);
    expect(analyzedData.percentageDifferenceOpenClose).toBe(0.0484261501210802);
  });
});
