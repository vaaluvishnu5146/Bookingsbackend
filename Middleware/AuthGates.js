const { verifyTokenValidity } = require("../utils/Auth.utils");

function tokenGate(req, res, next) {
  if (
    verifyTokenValidity(
      req.header("Authorization"),
      process.env.JWT_TOKEN_SECRET
    )
  ) {
    next();
  } else {
    return res.status(401).json({
      success: false,
      message: "Session Expired. Login again to continue!!",
    });
  }
}

module.exports = { tokenGate };
