module.exports = (err, req, res, next) => {
  if (err?.message?.includes('Cast to ObjectId')) {
    err.message = 'ID tidak valid!';
  }

  if (err?.code === 11000) {
    err.messages = [];

    for (const property in err.keyValue) {
      err.messages.push(`${property} sudah ada!`);
    }
  }

  res.status(err.statusCode || 500).json({
    errors: err.messages || [err.message],
  });
};
