const saved = require("_services/images/_save/unsavedImage");

const unsaveToLib = async (req, res) => {
  const result = await saved({ authPayload: req.payload, imageId: req.params.imageId });
  return res.status(result.code).json(result);
};

module.exports = unsaveToLib;
