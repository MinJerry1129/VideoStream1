<template>
      <div class="container">
        <div class="row justify-content-center align-items-center height-self-center">
            <div class="col-lg-5 col-md-12 align-self-center">
              <div class="sign-user_card ">
                  <div class="sign-in-page-data">
                    <div class="sign-in-from w-100 m-auto">
                        <h3 class="mb-3">Reset Password</h3>
                        <p class="text-body">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                        <form class="mt-4">
                          <div class="form-group">
                            <input type="email" class="form-control mb-0" id="exampleInputEmail2" placeholder="Enter email" autocomplete="off" required>
                          </div>
                          <div class="sign-info">
                            <router-link to="/auth/sign-in1" class="btn btn-hover">Reset</router-link>
                          </div>
                        </form>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'RecoverPassword1'
}
</script>
