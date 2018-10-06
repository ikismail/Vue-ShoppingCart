<template>
    <div class="create-account">
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
                            <input type="text" class="form-control" id="act-password" placeholder="New password" value="" required>
                            <div class="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                </form>    
    </div>    
</template>
<script>
export default {
    name: "CreateAccount"
}
</script>

<style>
.form-signup {
  width: 100%;
  max-width: 500px;
  padding: 15px;
  margin: auto;
}
</style>
