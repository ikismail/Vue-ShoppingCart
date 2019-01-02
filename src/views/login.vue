<template>
  <div class="login">
    <div class="row">
      <div class="col">
        <createAccount v-if="isSignUp"></createAccount>

        <form class="form-signin" @submit.prevent="login" v-if="!isSignUp">
          <img class="mb-4" src="../assets/login-img.png" alt width="72" height="72">
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="email" class="sr-only">Email address</label>
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="email"
            placeholder="Email address"
            required
            autocomplete="email"
          >
          <label for="password" class="sr-only">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            placeholder="Password"
            required
            autocomplete="current-password"
          >
          <p class="text-muted">
            <a href="javascript:;;">Forget password ?</a>
          </p>
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            <i class="fa fa-spinner fa-spin mr-1" v-if="showLoader"></i> Log In
          </button>
        </form>
        <p class="mt-3 text-muted">
          <span v-if="isSignUp">
            Already a member?
            <a href="javascript:;;" @click="toggleForm">Sign in</a>
          </span>
          <span v-if="!isSignUp">
            New to ikismail?
            <a href="javascript:;;" @click="toggleForm">Create an Account</a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import CreateAccount from "@/components/CreateAccount";
import { encryptUser } from "../components/shared/service/authService";
import axios from "axios";
import {
  successToaster,
  errorToaster
} from "../components/shared/service/ErrorHandler.js";

import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "login",
  components: { CreateAccount },
  data() {
    return {
      email: "",
      password: "",
      showLoader: false,
      isSignUp: false
    };
  },
  methods: {
    toggleForm() {
      this.isSignUp = !this.isSignUp;
    },

    ...mapMutations(["ADD_LOGGED_USER"]),

    //  Login function usign email and password
    login(event) {
      this.showLoader = true;
      const user = {
        email: this.email,
        password: this.password
      };

      axios
        .post(`${process.env.VUE_APP_BASE_URL}/login`, user)
        .then(response => {
          this.showLoader = false;
          this.ADD_LOGGED_USER(response.data[0]);
          event.target.reset();
          this.$router.push(this.$route.query.from || "/");
        })
        .catch(error => {
          this.showLoader = false;
          errorToaster("Invalid Credentials", "");
          console.log(error);
        });
    }
  }
};
</script>
<style>
.login {
  position: relative;
  top: 50px;
  margin-bottom: 15%;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
