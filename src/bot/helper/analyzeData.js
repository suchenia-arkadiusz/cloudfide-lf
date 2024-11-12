module.exports = {
  analyzeData: (data) => {
    data.sort((a, b) => a.openTime - b.openTime);
    const min = Math.min(...data.map((item) => parseFloat(item.lowPrice)));
    const max = Math.max(...data.map((item) => parseFloat(item.highPrice)));
    const percentageDifference = ((max - min) / min) * 100;
    const percentageDifferenceOpenClose =
      ((data[0].openPrice - data[data.length - 1].closePrice) /
        data[0].openPrice) *
      100;

    return {
      min,
      max,
      percentageDifference,
      percentageDifferenceOpenClose,
    };
  },
};
