<template>
  <div class="create-account">
    <form class="form-signup" @submit.prevent="createAccount">
      <img class="mb-4" src="../assets/create-account.svg" alt width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Create an account</h1>
      <div
        class="alert alert-danger"
        role="alert"
        v-for="(error, index) in errorMessage"
        :key="index"
      >{{error}}</div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="First Name"
            v-model="user.firstName"
            required
          >
          <div class="invalid-feedback">Valid first name is required.</div>
        </div>
        <div class="col-md-6 mb-3">
          <input
            type="text"
            class="form-control"
            v-model="user.lastName"
            id="lastName"
            placeholder="Last Name"
            value
            required
          >
          <div class="invalid-feedback">Valid last name is required.</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md mb-3">
          <input
            type="text"
            class="form-control"
            v-model="user.email"
            id="emailId"
            placeholder="Email address"
            value
            required
          >
          <div class="invalid-feedback">Valid first name is required.</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md mb-3">
          <input
            type="text"
            class="form-control"
            id="act-password"
            placeholder="New password"
            value
            v-model="user.password"
            required
          >
          <div class="invalid-feedback">Valid first name is required.</div>
        </div>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        <i class="fa fa-spinner fa-spin mr-1" v-if="showLoader"></i>Sign Up
      </button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { successToaster, errorToaster } from "./shared/service/ErrorHandler.js";
export default {
  name: "CreateAccount",
  data() {
    return {
      showLoader: false,
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      errorMessage: []
    };
  },
  methods: {
    createAccount(e) {
      this.showLoader = true;

      this.errorMessage = [];

      if (this.user.firstName.length < 5) {
        this.errorMessage.push(
          "FirstName should contains more than 5 character"
        );
      }

      if (this.ValidateEmail(this.user.email) === false) {
        this.errorMessage.push("Please provide a valid Email address");
      }
      if (this.errorMessage.length === 0) {
        axios
          .post(`${process.env.VUE_APP_BASE_URL}/users`, this.user)
          .then(response => {
            this.showLoader = false;
            successToaster(
              "Registered Successfully",
              "User Registered Successfully"
            );
          })
          .catch(error => {
            console.log(error);
            errorToaster(
              "Registeration Failed",
              "Please try again after sometime"
            );
          });
      }
    },

    ValidateEmail(mail) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style>
.form-signup {
  width: 100%;
  max-width: 500px;
  padding: 15px;
  margin: auto;
}
</style>
