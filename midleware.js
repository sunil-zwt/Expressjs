module.exports = function (options) {
  return function (req, res, next) {
    res.status(200).send(user)
    next()
  }
}