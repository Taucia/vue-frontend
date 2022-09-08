<template>
    <!-- Edit Modal -->
    <div
      class="modal fade"
      :id="'add'"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">add User Admin</h5>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6 mx-auto mb-3">
                <label for="firstName" class="form-label">FirstName:</label>
                <input
                  type="text"
                  class="modal-firstName"
                  id="product_firstName"
                  v-model="firstName"
                  placeholder="product_firstName"
                />
              </div>
              <div class="col-md-6 mx-auto mb-3">
                <label for="lastName" class="form-label">LastName:</label>
                <input
                  type="text"
                  class="modal-lastName"
                  id="lastName"
                  v-model="lastName"
                  placeholder="lastName"
                />
              </div>
              <div class="col-md-6 mx-auto mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="text"
                  class="modal-email"
                  id="email"
                  v-model="email"
                  placeholder="email"
                />
              </div>
              <div class="col-md-6 mx-auto mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="text"
                  class="modal-password"
                  id="password"
                  v-model="password"
                  placeholder="password"
                />
              </div>
              
             
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="add"
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        firstName: null,
        lastName: null,
        email: null,
        password: null
        
      };
    },
    methods: {
      add() {
        return this.$store.dispatch("adduser", {
            firstName: this. firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        
        });
      },
    },
  };
  </script>
  