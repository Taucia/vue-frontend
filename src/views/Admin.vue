<template>
  <div id="main" class="admin container d-flex align-items-center flex-column gap-2 justify-content-center">
    <h2>WELCOME ADMINS</h2>
    <img class="img-fluid"
      id="logo"
      src="https://i.postimg.cc/wBB9VjyT/tj-Library-removebg-previewcropped.png"
      alt="logo"/>
      <br>
    <div>
      <router-link to="/admin/users"><button id="adminButton" class="btn btn">View Users</button></router-link>
      <router-link to="/admin/products"><button id="adminButton" class="btn btn">View Products</button></router-link>
    </div>
  </div>
  <div  id="main" class="admin container d-flex align-items-center flex-column pt-5 justify-content-center">
    <h1>There is No User Logged in</h1>
    <router-link to="/login">
    <button class="btn btn-grad">Return to Login Page</button>
    </router-link>
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped>
container[data-v-54c38a05] {
    padding: 50px 0;
    margin-top: none;
}

#adminButton{
  width: 122.56px;
}
h1{
      color:#2f7474;
}
h2{
      color:#2f7474;
}
.btn{
    background-image: linear-gradient(
    to right,
    #2f7474 0%,
    #22b1b1 51%,
    #2f7474 100%
  );
  margin: 10px;
  padding: 10px 25px;
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
</style>