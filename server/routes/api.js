const express = require('express')
const router = express.Router()


const UserModel = require('../mongo/model/user')



/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works')
})

/*
  API for User Schema
  User Create and Read all Policies API's

*/
router.route('/users')

    //  Create a new User
    .post((req, res) => {
        const user = new UserModel() // create a new instance of the User model

        user.firstName = req.body.firstName
        user.lastName = req.body.lastName
        user.fullName = req.body.firstName + " " + req.body.lastName
        user.password = req.body.password
        user.email = req.body.email
        user.isAdmin = false
        user.createdOn = new Date().toLocaleString()

        // save the bear and check for errors
        user.save(user, (err, user) => {
            if (err) {
                res.send(err)
            }
            console.log('**********NEWLY CREATED SITEURL***********')
            res.send(user)
        })
    })
    // Get All Users
    .get((req, res) => {
        UserModel.find((err, data) => {
            if (err) {
                res.send(err)
            }
            res.json(data)
        })
    })

/*  USER Update and Read by Id and delete users API's */
// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_id')

    // get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
    .get(function (req, res) {
        UserModel.findById(req.params.user_id, function (err, data) {
            if (err) {
                res.send(err)
            }
            res.json(data)
        })
    })

    // update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
    .put(function (req, res) {
        // use our user model to find the user we want
        UserModel.findById(req.params.user_id, function (err, user) {
            if (err) {
                res.send(err)
            }

            user.name = req.body.name
            user.password = req.body.password
            user.email = req.body.email
            user.isAdmin = false
            user.user_avatar = req.body.user_avatar
            user.phoneNumber = req.body.phoneNumber
            user.createdOn = req.body.createdOn

            // save the bear
            user.save(function (err, data) {
                if (err) {
                    res.send(err)
                }
                res.send(data)
            })

        })
    })

module.exports = router