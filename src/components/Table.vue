<template>
<div class="wrapper">
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Bordered Table</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>userId</th>
                      <th>title</th>
                      <th>completed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr :key="key" v-for="(dataItem, key) in paginatedItems">
                      <td>{{dataItem.id}}</td>
                      <td>{{dataItem.userId}}</td>
                      <td>{{dataItem.title}}</td>
                      <td>{{dataItem.completed}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
              <div class="card-footer clearfix">
                <ul class="pagination flex-wrap pagination-sm m-0 float-right">
                  <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                  <li class="page-item" @click="pageClick(page)" :key="index" v-for="(page, index) in pages"><a class="page-link" href="#">{{page}}</a></li>
                  <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                </ul>
              </div>
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</div>
<!-- ./wrapper -->
</template>

<script>
import adminLteCss from '../../node_modules/admin-lte/dist/css/adminlte.min.css';
import adminLteJs from '../../node_modules/admin-lte/dist/js/adminlte.min.js';
import axios from 'axios';
export default {
  name: "Table",
  data() {
    return {
      data: [],
      dataItemsPerPage: 10,
      // numberOfSteps: 0,
      pageNumber: 1,
      // steps: []
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.data.length / 10);
    },
    paginatedItems() {
      let from = (this.pageNumber - 1)*this.dataItemsPerPage;
      let to = from + this.dataItemsPerPage;
      return this.data.slice(from,to);
    }
  },
  methods: {
    pageClick(page){
      this.pageNumber = page;
    }
  },
  beforeCreate() {
      axios
      .get('https://jsonplaceholder.typicode.com/todos/')
      .then(({ data })=> {
          this.data = data;
          // this.end = data.length;
          // this.numberOfSteps = 
          // for(let i = 1; i <= this.numberOfSteps; i++)
          //   this.steps.push(i);
          console.log(data);
      })
      .catch((err)=> {})
  }
};
</script>

<style lang="scss">
.flex-wrap {
  flex-wrap: wrap;
}
@media all and (min-width: 768px) {
  body:not(.sidebar-mini-md):not(.sidebar-mini-xs):not(.layout-top-nav) .content-wrapper, body:not(.sidebar-mini-md):not(.sidebar-mini-xs):not(.layout-top-nav) .main-footer, body:not(.sidebar-mini-md):not(.sidebar-mini-xs):not(.layout-top-nav) .main-header {
      margin-left: 0px;
  }
}
</style>