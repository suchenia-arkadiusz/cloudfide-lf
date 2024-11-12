const result = {
  onSuccess: (data) => ({
    data,
    isSuccess: true,
  }),
  onFailure: (error) => ({
    error,
    isSuccess: false,
  }),
};

module.exports = result;
