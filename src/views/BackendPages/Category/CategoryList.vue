<template>
  <b-container fluid>
    <b-row class="row">
      <b-col sm="12" >
        <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                  <h4 class="card-title">Category Lists</h4>
              </div>
              <div class="iq-card-header-toolbar d-flex align-items-center">
                  <router-link :to="{ name: 'category.add-category' }"  class="btn btn-primary">Add Category</router-link>
              </div>
            </div>
            <div class="iq-card-body">
              <div class="table-view">
                  <table class="data-tables table movie_table " style="width:100%">
                    <thead>
                        <tr>
                          <th style="width:10%;">No</th>
                          <th style="width:20%;">Name</th>
                          <th style="width:40%;">Description</th>
                          <th style="width:10%;">Movie</th>
                          <th style="width:20%;">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(category,index) in this.categoryList" :key="index">
                          <td>{{category.id}}</td>
                          <td>{{category.name}}</td>
                          <td>
                              <p>{{category.description}}</p>
                          </td>
                          <td>20</td>
                          <td>
                              <div class="flex align-items-center list-user-action">
                                <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title=""
                                    data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                <router-link :to="{ name: 'category.update-category', params: { id: category.id } }" class="iq-bg-success" data-toggle="tooltip" data-placement="top" title=""
                                    data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></router-link>
                                <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                    data-original-title="Delete" href="#" @click="removeCategory(category)"><i
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
import { core } from '../../../config/pluginInit'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CategoryList',
  mounted () {
    core.index()
    core.initDataTable()
  },
  computed: {
    ...mapGetters({
      categoryList: 'Category/categoryState'
    })
  },
  data () {
    return {
      newID: 0
    }
  },
  methods: {
    ...mapActions({
      removeCategory: 'Category/removeCategoryAction'
    })
  }
}
</script>
