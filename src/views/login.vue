<template>
    <div class="login">

        <div class="row">
            <div class="col">
                <form class="form-signin">
                    <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72">
                    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" class="sr-only" >Email address</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autocomplete="email">
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required autocomplete="current-password">
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Log In</button>
                </form>
            </div>
            <div class="col">
                <form class="form-signup">
                    <img class="mb-4" src="../assets/create-account.svg" alt="" width="72" height="72">
                    <h1 class="h3 mb-3 font-weight-normal">Create an account</h1>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <input type="text" class="form-control" id="firstName" placeholder="First Name" value="" required>
                            <div class="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <input type="text" class="form-control" id="lastName" placeholder="Last Name" value="" required>
                            <div class="invalid-feedback">
                            Valid last name is required.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md mb-3">
                            <input type="text" class="form-control" id="emailId" placeholder="Email address" value="" required>
                            <div class="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md mb-3">
                            <input type="text" class="form-control" id="password" placeholder="New password" value="" required>
                            <div class="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>
                    </div>

                    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                </form>
            </div>
        </div>
         

    </div>    
</template>
<script>
export default {
  name: "login"
};
</script>
<style>
/* html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
} */

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
.form-signup {
  width: 100%;
  max-width: 500px;
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
