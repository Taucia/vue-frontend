<template>
    <a
     data-bs-target="#userP"
       data-bs-toggle="offcanvas"
      href="#offcanvasExample"
      role="button"
      aria-controls="offcanvasExample"
    >
    <i class="bi bi-person-square"></i>
    </a>
  
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="userP"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">
           User Profile  <i class="bi bi-person-square"></i>
        </h5>
     
        <button
          type="button"
          class="btn btn-grad"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          X
        </button>
      </div>
      <hr />
      <div class="offcanvas-body text-black">
        <!-- <div v-for="(user, index) in userprofile" :key="index"> -->
          <div class="container card row text-center">
            <div v-if="this.$store.state.user != null">
                <div v-if="user">

<!-- Text input-->

<div class="form-group">
  <label class="col-md control-label">First Name</label>  
  <div class="col-md inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <div class="form-control text-center" >
   {{user.firstName}}
  </div>
  
    </div>
  </div>
</div>

<!-- Text input-->

<div class="form-group">
  <label class="col-md control-label" >Last Name</label> 
    <div class="col-md inputGroupContainer">
    <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <div class="form-control text-center" >
    {{user.lastName}}
  </div>
    </div>
  </div>
</div>

<!-- Text input-->
       <div class="form-group">
  <label class="col-md control-label">E-Mail</label>  
    <div class="col-md inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
  <div class="form-control text-center" >
 {{user.email}}
  </div>
    </div>
  </div>
</div>


<!-- Text input-->
       
<div class="form-group">
  <label class="col-md- control-label">Password</label>  
    <div class="col-md inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
  <div  class="form-control text-center" >
  {{user.password}}
  </div>
    </div>
  </div>
</div>

<!-- Text input-->
       
<div class="form-group">
  <label class="col-md- control-label">UserRole</label>  
    <div class="col-md inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
  <div  class="form-control text-center" >
  {{user.userRole}}
  </div>
    </div>
  </div>
</div>
<updateuser :user="user" />
      
                <button class="btn-grad">
                    Edit
                </button>
                  <button class="btn-grad">
                    Delete
                </button>

</div>
    </div><!-- /.container -->
            </div>
            </div>
          </div>
     
    <!-- </div> -->


  </template>
  
  <script>
    import updateuser from '../components/updateuser.vue';
  export default {
    component:{
        updateuser,
    },
    name: "userprofile" ,
    computed: {
      user() {
        return this.$store.state.user;
      },
    },
    mounted (){
        this.$store.dispatch('getuser',this.$store.state.user.id)
    }
  };
  </script>

<style scoped>

a {
  font-weight: bold;
  color: #3c5454;
}

a.router-link-exact-active {
  color:#3c5454;
}
.btn {
  background-image: linear-gradient(
    to right,
    #22b1b1 0%,
    #2f7474 51%,
    #22b1b1 100%
  );
  margin: 10px;

  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  font-size: 12px;
}

.btn:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
.bi {
  color: #9ed4d4;
  background-color: #eee;
  height: 50px;
}
.form-control{
    width:380px;
    margin:20px;
    justify-items: center;
    align-content: center;
    padding: 2px;
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
</style>
