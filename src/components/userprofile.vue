<template>
    <a
     data-bs-target="#userP"
       data-bs-toggle="offcanvas"
      href="#offcanvasExample"
      role="button"
      aria-controls="offcanvasExample"
    >
      <i class="bi bi-bookmark-star"></i>
    </a>
  
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="userP"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">
           User Profile <i class="bi bi-star"></i>
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
                <h1>{{ user.id }}</h1>
            </div>
            </div>
          </div>
        </div>
      </div>
    <!-- </div> -->
  </template>
  
  <script>
  export default {
    name: "userprofile",
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

<style>

</style>