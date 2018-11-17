<template>
    <div class="login">
        <div class="row">
            <div class="col">
                <createAccount></createAccount>
            </div>
            <div class="col">
                <form class="form-signin" @submit.prevent="login">
                    <img class="mb-4" src="../assets/login-img.png" alt="" width="72" height="72">
                    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="email" class="sr-only" >Email address</label>
                    <input type="email" id="email" class="form-control" v-model="email" placeholder="Email address" required autocomplete="email">
                    <label for="password" class="sr-only">Password</label>
                    <input type="password" id="password" v-model="password" class="form-control" placeholder="Password" required autocomplete="current-password">
                    <button class="btn btn-lg btn-primary btn-block" type="submit" > <i class="fa fa-spinner fa-spin mr-1" v-if="showLoader"></i> Log In</button>
                    <p class="mt-5 mb-3 text-muted"><a href="javascript:;;">Forget password ?</a></p>
                </form>
            </div>
        </div>
    </div>    
</template>
<script>
import CreateAccount from "@/components/CreateAccount";
export default {
  name: "login",
  components: { CreateAccount },
  data() {
    return {
      email: "",
      password: "",
      showLoader: false
    };
  },
  methods: {
    //  Login function usign email and password
    login(event) {
      this.showLoader = true;
      console.log(this.email, this.password);
      event.target.reset();
      this.$router.push({ path: "/" });
      this.showLoader = false;
    }
  }
};
</script>
<style>
.login {
  position: relative;
  top: 50px;
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
