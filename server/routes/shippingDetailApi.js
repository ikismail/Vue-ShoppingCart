const express = require('express')
const router = express.Router()

// const mongodb = require('../mongo/config')

const ShippingModel = require('../mongo/model/shipping-detail')


/*
  API for ShippingSchema Schema
  Product Create and Read all Policies API 's

*/
router.route('/shipping')

    //  Create a new ShippingDetail
    .post((req, res) => {
        const shippingDetail = new ShippingModel() // create a new instance of the Product model

        shippingDetail.address1 = req.body.address1
        shippingDetail.address2 = req.body.address2
        shippingDetail.country = req.body.country
        shippingDetail.zipCode = req.body.zipCode
        shippingDetail.shippingDate = req.body.shippingDate
        shippingDetail.products = req.body.products
        shippingDetail.userId = req.body.userId
        shippingDetail.totalPrice = req.body.totalPrice

        // save the bear and check for errors
        shippingDetail.save(shippingDetail, (err, shippingDetail) => {
            if (err) {
                res.send(err)
            }

            console.log('**********NEWLY CREATED SITEURL***********')
            console.log(shippingDetail)
            res.send(shippingDetail)
        })
    })

module.exports = router
