<template>
    <section class="m-profile manage-p">
        <b-container class="h-100">
            <b-row class="align-items-center justify-content-center h-100">
                <b-col lg="10">
                    <div class="sign-user_card">
                        <b-row>
                            <b-col lg="2">
                                <div class="upload_profile d-inline-block">
                                <img src="../../../assets/images/frontend/user/user.jpg" class="profile-pic rounded-circle img-fluid" alt="user">
                                <div class="p-image">
                                    <i class="ri-pencil-line upload-button"></i>
                                    <input class="file-upload" type="file" accept="image/*">
                                </div>
                                </div>
                            </b-col>
                            <b-col lg="10" class="device-margin">
                                <div class="profile-from">
                                    <h4 class="mb-3">Manage Profile</h4>
                                    <b-form class="mt-4">
                                        <b-form-group>
                                            <label>Name</label>
                                            <b-form-input type="text" class="form-control mb-0" id="exampleInputl2"
                                                placeholder="Enter Your Name" autocomplete="off" required />
                                        </b-form-group>
                                        <b-form-group >
                                            <label>Date of Birth</label>
                                            <flat-pickr :config="config" class="form-control date-input basicFlatpickr mb-0" placeholder="Select Date" />
                                        </b-form-group>
                                        <b-form-group class="d-flex flex-md-row flex-column">
                                            <div class="iq-custom-select d-inline-block manage-gen">
                                                <b-form-select v-model="selected" :options="options" class="form-control pro-dropdown"></b-form-select>
                                            </div>
                                            <div class="iq-custom-select d-inline-block lang-dropdown manage-dd">
                                                <select name="cars" class="form-control pro-dropdown" id="lang"
                                                    multiple="multiple">
                                                    <option value="english">English</option>
                                                    <option value="hindi">Hindi</option>
                                                    <option value="gujarati">Gujarati</option>
                                                    <option value="bengali">Bengali</option>
                                                    <option value="marathi">Marathi</option>
                                                    <option value="tamil">Tamil</option>
                                                    <option value="kannada">Kannada</option>
                                                </select>
                                            </div>
                                        </b-form-group>
                                        <div class="d-flex">
                                            <a href="#" class="btn btn-hover">Save</a>
                                            <a href="#" class="btn btn-link">Cancel</a>
                                        </div>
                                    </b-form>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>
<script>
import { core } from '../../../config/pluginInit'
export default {
  name: 'ManageProfile',
  components: {
  },
  mounted () {
    core.index()
  },
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'male' },
        { value: 'a', text: 'female' }
      ],
      config: {
        dateFormat: 'Y-m-d'
      }
    }
  }
}
</script>
