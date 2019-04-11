# ShoppingCart - Vue.js + Node.js + Express + MongoDB

[![HitCount](http://hits.dwyl.io/ikismail/Vue-ShoppingCart.svg)](http://hits.dwyl.io/ikismail/Vue-ShoppingCart)
[![GitHub forks](https://img.shields.io/github/forks/ikismail/Vue-ShoppingCart.svg)](https://github.com/ikismail/Vue-ShoppingCart/network)
[![Github Dependencies](https://david-dm.org/ikismail/Vue-ShoppingCart.svg)](https://david-dm.org/ikismail/Vue-ShoppingCart.svg)
[![GitHub stars](https://img.shields.io/github/stars/ikismail/Vue-ShoppingCart.svg)](https://github.com/ikismail/Vue-ShoppingCart/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/ikismail/Vue-ShoppingCart.svg)](https://github.com/ikismail/Vue-ShoppingCart/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/ikismail/Vue-ShoppingCart/blob/master/LICENSE)
[![npm](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://vue-shop-cart.herokuapp.com/)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/ikismail/Vue-ShoppingCart.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fikismail%2FVue-ShoppingCart)

Developing a **ShoppingCart (Ecommerce) Application using Vue.js**

**Live Demo** : [Vue-Shopping-Cart](#)

This project was generated with [Vue CLI](https://github.com/vuejs/vue-cli) version **3.x**

## Functionalitites
1. User Registeration and Authentication using Passport.js (Email/password | Google Authentication)
2. CRUD Operations like
    * User can add product to his cart
    * Admin can add product to the product list.
    * Admin can edit/delete the product.
3. Security
    * Implementation of Authentication and Authorization.

## Tools and Technologies:
* Technology : Vue.js + Express + Node.js + MongoDb (MEVN), HTML, Bootstrap, PWA.

## Installation

1. Vue CLI - [Installation of Vue CLI](https://cli.vuejs.org/guide/installation.html)
2. NodeJs - [Download Nodejs](https://nodejs.org/en/download/)
3. Package Manager - NPM / Yarn
4. Clone the repository and run `npm install` if you use **npm** as package manager or `yarn install` if you use **yarn** as package manager.
5. Configuring MongoDB `server/mongo/config.js`
```
    mongoose.connect('<YOUR_MONGODB_URL>', {
        useNewUrlParser: true
    }); // connect to your database

```
6. Run the server `npm run serve`

## Screenshots:

### Main Page:
![Alt text](https://image.ibb.co/cF5D6V/screencapture-localhost-8081-2018-10-28-14-33-47.png)

### Product Page:
![Alt text](https://image.ibb.co/iZxh0q/screencapture-localhost-8081-products-2018-10-28-14-34-08.png)

## How can I support the developer ?

* Star my Github repo ⭐
* Create pull requests, submit bugs, suggest new features or documentation updates 🛠

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
