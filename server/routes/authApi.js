const express = require('express')
const router = express.Router()

const UserModel = require('../mongo/model/user')

router.route('/login').post((req, res) => {
    UserModel.find({
        email: req.body.email,
        password: req.body.password
    }, function (err, user) {
        if (err) {
            res.send(err)
        }

        if (user.length === 0) {
            res.status(401).json({
                status: 401,
                message: 'Unauthorized credentials mismatch'
            })
        } else {
            res.json(user)
        }

    })
})
module.exports = router