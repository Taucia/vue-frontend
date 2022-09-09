<template>
    <button
      class="button b btn-layout mx-1"
      data-bs-toggle="modal"
      
    >
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
  
    <!-- Modal1 -->
    <div
      class="modal fade"
      :id="'exampleModal' + user.id"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              EDIT USER PROFILE
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-sm-12">
                  <form>
                    <!-- firrstName -->
                    <label for="firstName">Firstname:</label><br />
                    <input
                      class="w-50"
                      type="text"
                      v-model="user.firstName"
                      placeholder="Insert your firstName"
                      required
                    /><br />
                    <!-- lastName -->
                    <label for="lastName">lastname:</label><br />
                    <input
                      class="w-50"
                      type="text"
                      v-model="user.lastName"
                      placeholder="Insert your lastName"
                      required
                    /><br />
                    <!-- email -->
                    <label for="email">Email:</label><br />
                    <input
                      class="w-50"
                      type="email"
                      v-model="user.email"
                      placeholder="Insert your email"
                      required
                    /><br />
  
                    <!-- password -->
                    <label for="password">Password:</label><br />
                    <input
                      class="w-50"
                      type="password"
                      v-model="user.password"
                      minlength="8"
                      maxlength="15"
                      placeholder="Insert your Password"
                      required
                    /><br />
                         <!-- userrole -->
                  <label for="userRole">User Role:</label><br />
                  <select class="w-50" v-model="user.userRole" required>
                    <option value="user">User</option>
                    <option value="admin">Admin</option></select
                  ><br />
  
                    <button
                      class="mt-3 w-50 b btn-layout"
                      type="submit"
                      @click="this.$store.dispatch('edituser',user.id)" 
                    >
                      SAVE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["user"],
    data() {
      // insert data into empty array
      return {
        firstName: "",
        lastName: "",
        email: "",
        userRole: "",
        password: "",
      };
    },
    computed: {
      users() {
        return this.$store.state.users;
      },
    },
    methods: {
      edituser(e) {
        e.preventDefault();
        console.log(this.user);
        return this.$store.dispatch("edituser", this.user);
      },
    },
  };
  </script>
  
  <style scoped>
  .button {
    margin-right: 2rem;
  }
  
  input{
    padding-top: 5px;
    padding-bottom: 5px;
  }
  
  </style>