const apiError = require('../error/apiError')
class UserController {
    async registration (req,res) {

    }

    async login (req,res) {

    }

    async checkAuth (req,res,next) {
        const {id} = req.query
        if (!id) {
            return next(apiError.badRequest('Undefined id'))
        }
        res.json(id)
    }
}

module.exports = new UserController()