<template>
  <div id="main" class="users container">
    <h1>ALL USERS</h1>
    <div style="overflow-x:auto">
      <table class="table text-dark border-dark table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">User Password</th>
          <th scope="col">Cart</th>
          <th scope="col">Delete</th>
              
        </tr>
      </thead>
           <tbody>
        <tr v-for="user in users" :key="user.userId">
          <th scope="row" class="p-2">{{ user.id }}</th>
          <th scope="row">{{ user.firstName }}</th>
          <th scope="row">{{ user.lastName }}</th>
          <th scope="row">{{ user.email }}</th>
          <th scope="row">{{user.userPassword}}/></th>
          <th scope="row">{{ user.cart }}</th>
          <th scope="row text-center">
          
          <button
              data-bs-toggle="modal"
              :data-bs-target="'#update' + user.id"
              class=" btn btn-grad"
              id="prodButton"
            >
              Edit
            </button>
            <button
              data-bs-toggle="modal"
              class=" btn btn-grad"
              id="prodButton"
            @click="this.$store.dispatch('deleteuser',user.id)" 
            >
              Delete
            </button>
          </th>
          
          <addModalUser :user="user" />
          <updateuser :user="user" />
          <DeleteUserModal :user="user" />
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>
<script>
import updateuser from '../components/updateuser.vue';
// import DeleteAccountModal from '../components/DeleteAccountModal.vue';
export default {
  components:{
      // UserCartModal,DeleteAccountModal
      updateuser
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("getusers");
  },
  methods: {
    edituser() {
      return this.$store.dispatch("edituser", this.user);
    },
  },
};
</script>
<style scoped>
#main{
  padding: 110px 0;
}
#word{
  word-break: break-all;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid white;
}
th, td {
  text-align: center;
  padding: 8px;
}
.btn-grad {
  background-image: linear-gradient(
    to right,
    #22b1b1 0%,
    #2f7474 51%,
    #22b1b1 100%
  );
  margin: 10px;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  font-size: 12px;
}
.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
.modal-content{
      background-image: linear-gradient(
    to right,
    #22b1b1 0%,
    #2f7474 51%,
    #22b1b1 100%
  );
}
</style>
