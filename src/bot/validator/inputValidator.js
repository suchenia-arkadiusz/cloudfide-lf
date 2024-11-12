module.exports = {
  validateInput: async (req, res, next) => {
    const { startTime, endTime } = req.query;

    if (startTime == null || endTime == null) {
      return res.status(400).json({
        message:
          "The startTime and endTime parameters are required and need to be in the ISO Format",
      });
    }

    next();
  },
};
