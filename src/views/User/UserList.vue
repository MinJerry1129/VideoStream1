<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        <div class="iq-card">
          <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                <h4 class="card-title">User Lists</h4>
              </div>
          </div>
          <div class="iq-card-body">
              <div class="table-view">
                <table class="data-tables table movie_table" style="width:100%">
                    <thead>
                      <tr>
                          <th style="width: 10%;">Profile</th>
                          <th style="width: 10%;">Name</th>
                          <th style="width: 20%;">Contact</th>
                          <th style="width: 20%;">Email</th>
                          <th style="width: 10%;">Country</th>
                          <th style="width: 10%;">Status</th>
                          <th style="width: 10%;">Join Date</th>
                          <th style="width: 10%;">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                          <img src="../../assets/images/user/01.jpg" class="img-fluid avatar-50" alt="author-profile">
                        </td>
                        <td>Anna Sthesia</td>
                        <td>0123456789</td>
                        <td>anna@gmail.com</td>
                        <td>India</td>
                        <td><span class="badge iq-bg-success">Active</span></td>
                        <td>21 Jul, 2020</td>
                        <td>
                          <div class="flex align-items-center list-user-action">
                              <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i
                                class="ri-pencil-line"></i></a>
                                <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i
                                    class="ri-delete-bin-line"></i></a>
                                </div>
                              </td>
                      </tr>
                    </tbody>
                </table>
              </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
export default {
  name: 'UserList',
  mounted () {
    core.index()
    core.initDataTable()
  },
  data () {
    return {
    }
  },
  components: {
  }
}
</script>
