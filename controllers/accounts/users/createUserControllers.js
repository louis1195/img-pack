const { createUser } = require("../../../services/users/createUser");

const createUserControllers = async (req, res) => {
  try {
    const result = createUser({ infoUser: req.body });
    return res.status(result.code).json(result);
  } catch (e) {
    res.status(500).json({
      code: 500,
      error: e.message,
    });
  }
};

module.exports = createUserControllers;
