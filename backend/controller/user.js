exports.createUser = async (req, res, next) => {
  res.status(201).json({
    status: "success",
    message: "user successfullly created",
  });
};
