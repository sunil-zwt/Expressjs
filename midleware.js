module.exports = function (options) {
    
    return function (req, res, next) {
        const {method,url}=req
        console.log('method:',method,'url',url)
      next()
    }
  }