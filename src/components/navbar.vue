<template>
  <nav class="navbar navbar-expand-lg navbar ">
    <div class="container-fluid ">
      <a href="#">
        <img
          class="img img-fluid"
          src="https://i.postimg.cc/zvkpd0WW/tj-Library-removebg-preview.png"
          alt="logo"
      /></a>
      <button
        class="navbar-toggler "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-arrow-down-circle"></i>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-md-auto">
          <li>
            <span v-if="this.$store.state.user != null">
              <h1 v-if="this.$store.state.user.userRole == 'admin'">
                Welcome Admin
              </h1>
            </span>
              <hr>
          </li>
          <li class="nav-item rounded">
            <a class="navbar-brand" href="#"
              ><i class="bi bi-house me-2"></i
              ><router-link to="/">Home</router-link></a
            >
          </li>
          <li class="nav-item rounded">
            <a class="navbar-brand" href="#"
              ><i class="bi bi-people me-2"></i
              ><router-link to="/about">About</router-link></a
            >
          </li>
          <li class="nav-item rounded">
            <a class="navbar-brand" href="#"
              ><i class="bi bi-book me-2"></i
              ><router-link to="/products">Books</router-link></a
            >
          </li>
          <li class="nav-item rounded">
            <a class="navbar-brand" href="#"
              ><i class="bi bi-telephone me-2"></i
              ><router-link to="/contact">Contact</router-link></a
            >
          </li> 
          <!-- <li > <a class="navbar-brand" href="#"><i class="bi bi-box-arrow-right"></i>
            <router-link class="link" to="/login" @click="logout()"
              >Logout</router-link> </a>
            
          </li> -->
          <li>
            <button @click="this.$store.dispatch('getCart')">
              <cartVue />
            </button>
          </li>
         

          <li>
            <button
              type="button"
              data-bs-target="#userP"
              data-bs-toggle="offcanvas"
            >
              <userprofile />
            </button>
          </li>
          <li>
            
          <div v-if="user">
            <li class="dropdown">
              <button
                class="dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul v-if="user.userRole == 'admin'" class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li @click="logout">
                  <a class="dropdown-item" href="#">logout</a>
                </li>
                <router-link to="/admin/:id">
                  <li><a class="dropdown-item" href="#">admin</a></li>
                </router-link>
              </ul>
              <ul v-else class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li @click="logout">
                  <a class="dropdown-item" href="#">logout</a>
                </li>
              </ul>
            </li>
          </div>
          <div v-else>
            <li class="dropdown">
              <button
                class="dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                <router-link to="/login">
                  <li><a class="dropdown-item" href="#">login</a></li>
                </router-link>
                <router-link to="/register">
                  <li><a class="dropdown-item" href="#">register</a></li>
                </router-link>
              </ul>
            </li>
          </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import cartVue from "@/components/cart.vue";
import userprofile from "@/components/userprofile.vue";
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    user() {
      return this.$store.state.user;
    },
    mounted() {
      this.$store.dispatch("getuser");
    },
    methods: {
      logout() {
        this.$store.state.user = null;
        this.$store.state.cart = null;
        localStorage.removeItem("user");
        this.$router.push("./login");
      },
    },
  },
  components: {
    cartVue,
    userprofile,
  },
  // computed: {
  //   User() {
  //     return $store.state.User;
  //   },
  // },
  methods: {
    logout() {
      return this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
  h1{
    padding-right:50px;
  }
.navbar-expand-lg .navbar-collapse {
 padding-right:130px;
 
}
nav[data-v-688b5e20] {
  padding: 0px;
  margin: 0px;
}
.navbar-toggler-icon {
  color: #8db0b0;
}
.navbar-toggler {
  color: #8db0b0;
}
.img {
  width: 100px !important;
  height: 100px;
  aspect-ratio: 1;
}

.container-fluid {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}
.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  color: #3c5454;
  background-color: #3c5454;
}
navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: #8db0b0;
  border: 1px solid #3c5454;
  border-radius: 0.25rem;
  transition: box-shadow 0.15s ease-in-out;
}
.body {
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #3c5454;
  background-color: #8db0b0;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}
.dropdown-menu dropdown-menu-end {
  color: #8db0b0;
}
nav {
  padding: 60px;
}
/* body {

} */

nav a {
  font-weight: bold;
  color: #cde5e5;
}

nav a.router-link-exact-active {
  color: #8db0b0;
}
.bi {
  color: #3c5454;
}
#NavbarNav {
  color: black;
}
</style>
