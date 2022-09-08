<template>
  <div class="container">
    <div
      class="row d-flex flex-row justify-content-center"
      style="margin-bottom: 20px"
    >
      <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
        <div v-if="user">welcome {{ user[0].fullName }}</div>
        <div v-else>
          <div class="loader book">
  <figure class="page"></figure>
  <figure class="page"></figure>
  <figure class="page"></figure>
</div>

<h1>loading</h1> 
        </div>
          <form role="form" @submit.prevent="login" method="POST">
            <fieldset>
              <h2>Please Sign In</h2>
              <hr class="colorgraph" />
              <div class="form-group mb-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form-control input-lg"
                  placeholder="Email Address"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="form-control input-lg"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
              -
              <hr class="colorgraph" />
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6">
                <div v-if="clicked">
        <div v-if="user">
          <p>Successfully logged in</p>
        </div>
        <div v-else>
          <p>Checking...</p>
        </div>
      </div>
      <div v-else class="wrap">
       <input
                    type="submit"
                    class="btn1 btn-lg btn btn-block"
                    value="Sign In"
                  />
      </div>
                 
                </div>
                <div v-if="user">
                  <h2>login</h2>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <router-link to="/Register"
                    ><a
                      href="../views/Register.vue"
                      class="btn2 btn-lg btn btn-block"
                      >Register</a
                    >
                  </router-link>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
 
</template>

<script>
export default {
  data() {
    // insert empty object into form
    return {
      email: null,
      password: null,
      cart: null
    };
  },
  computed: {
    user() {
      return this.$store.user;
    },
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
        cart: this.cart
      };
      this.$store.dispatch("login", payload);
    },
  },
};
</script>
<style scoped>
.colorgraph {
  height: 5px;
  border-top: 0;
  background: #c4e17f;
  border-radius: 5px;
}
h2 {
  color: #2f7474;
}
.btn {
  color: #22b1b1;
}
.btn:hover {
  color: #2f7474;
}
.btn1 {
  color: #22b1b1;
  border-color: #2f7474;
}
.btn2 {
  color: #22b1b1;
  border-color: #2f7474;
}
.btn1:hover {
  color: #2f7474;
}
.btn2:hover {
  color: #2f7474;
}
/* loader */
* {
  box-sizing: border-box;
}

body {
  background: rebeccapurple;
}

h1 {
  color: #FFFFFF;
  text-align: center;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 20px;
  position: relative;
}

h1:after {
  position: absolute;
  content: "";
  -webkit-animation: Dots 2s cubic-bezier(0, .39, 1, .68) infinite;
  animation: Dots 2s cubic-bezier(0, .39, 1, .68) infinite;
}

.loader {
  margin: 5% auto 30px;
}

.book {
  border: 4px solid #FFFFFF;
  width: 60px;
  height: 45px;
  position: relative;
  perspective: 150px;
}

.page {
  display: block;
  width: 30px;
  height: 45px;
  border: 4px solid #FFFFFF;
  border-left: 1px solid #8455b2;
  margin: 0;
  position: absolute;
  right: -4px;
  top: -4px;
  overflow: hidden;
  background: #8455b2;
  transform-style: preserve-3d;
  -webkit-transform-origin: left center;
  transform-origin: left center;
}

.book .page:nth-child(1) {
  -webkit-animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.6s infinite;
  animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.6s infinite;
}

.book .page:nth-child(2) {
  -webkit-animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.45s infinite;
  animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.45s infinite;
}

.book .page:nth-child(3) {
  -webkit-animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.2s infinite;
  animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.2s infinite;
}


/* Page turn */

@-webkit-keyframes pageTurn {
  0% {
    -webkit-transform: rotateY( 0deg);
    transform: rotateY( 0deg);
  }
  20% {
    background: #4b1e77;
  }
  40% {
    background: rebeccapurple;
    -webkit-transform: rotateY( -180deg);
    transform: rotateY( -180deg);
  }
  100% {
    background: rebeccapurple;
    -webkit-transform: rotateY( -180deg);
    transform: rotateY( -180deg);
  }
}

@keyframes pageTurn {
  0% {
    transform: rotateY( 0deg);
  }
  20% {
    background: #4b1e77;
  }
  40% {
    background: rebeccapurple;
    transform: rotateY( -180deg);
  }
  100% {
    background: rebeccapurple;
    transform: rotateY( -180deg);
  }
}


/* Dots */

@-webkit-keyframes Dots {
  0% {
    content: "";
  }
  33% {
    content: ".";
  }
  66% {
    content: "..";
  }
  100% {
    content: "...";
  }
}

@keyframes Dots {
  0% {
    content: "";
  }
  33% {
    content: ".";
  }
  66% {
    content: "..";
  }
  100% {
    content: "...";
  }
}
</style>
