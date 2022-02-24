<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
          <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
                <div class="iq-header-title">
                  <h4 class="card-title">Rating Lists</h4>
                </div>
            </div>
            <div class="iq-card-body">
                <div class="table-responsive">
                  <table class="data-tables table movie_table" style="width:100%">
                      <thead>
                        <tr>
                            <th style="width: 5%;">No</th>
                            <th style="width: 5%;">Category</th>
                            <th style="width: 15%;">Name</th>
                            <th style="width: 30%;">Description</th>
                            <th style="width: 15%;">Release Date</th>
                            <th style="width: 10%;">Rating</th>
                            <th style="width: 10%;">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                              Movie
                            </td>
                            <td><p>Man of Street</p></td>
                            <td>
                              <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
                            </td>
                            <td>
                              2017
                            </td>
                            <td><i class="las la-star text-primary mr-2"></i> 9.2</td>
                            <td>
                              <div class="flex align-items-center list-user-action">
                                  <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="View" href="#"><i class="lar la-eye"></i></a>
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
  name: 'Rating',
  mounted () {
    core.index()
    core.initDataTable()
  },
  methods: {
  },
  data () {
    return {
      tableData: [
        { id: '1', category: 'Movie', description: 'Lorem ipsum dolor sit amet, consectetur', release_date: '2017', rating: '6.2' },
        { id: '2', category: 'Movie', description: 'Lorem ipsum dolor sit amet, consectetur', release_date: '2017', rating: '6.2' },
        { id: '3', category: 'Movie', description: 'Lorem ipsum dolor sit amet, consectetur', release_date: '2017', rating: '6.2' }
      ]
    }
  }
}
</script>
