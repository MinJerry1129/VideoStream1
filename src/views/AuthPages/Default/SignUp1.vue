<template>
     <b-container>
        <b-row class="justify-content-center align-items-center height-self-center">
            <b-col lg="5" md="12" class="align-self-center">
              <div class="sign-user_card ">
                  <div class="sign-in-page-data">
                    <div class="sign-in-from w-100 m-auto">
                        <h3 class="mb-3 text-center">Sign Up</h3>
                        <sign-up1-form formType="jwt"></sign-up1-form>
                    </div>
                  </div>
                  <div class="mt-3">
                    <div class="d-flex justify-content-center links">
                        Already have an account? <router-link to="/auth/sign-in1" class="text-primary ml-2">
                        Sign in
                      </router-link>
                      </div>
                  </div>
              </div>
            </b-col>
        </b-row>
     </b-container>
</template>
<script>

import SignUp1Form from './Forms/SignUp1Form'

export default {
  name: 'SignUp1',
  components: { SignUp1Form },
  data: () => ({}),
  methods: {
  }
}
</script>
