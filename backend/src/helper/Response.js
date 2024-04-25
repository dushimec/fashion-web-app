class Response {
  static successMessage(res, message, data = null, status = 200) {
      res.status(status).json(
          data
          ? {
              results: data.length || 1, 
              status: status,
              message,
              data: data,
          }
          : {
              status: status,
              message,
          }
      );
  }

  static errorMessage(res, error, status = 500) {
      res.status(status).json({
          status: status,
          error,
      });
  }
}

export default Response;
