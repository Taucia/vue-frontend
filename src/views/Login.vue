<template>
  <div class="container">
    <div
      class="row d-flex flex-row justify-content-center"
      style="margin-bottom: 20px"
    >
      <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
        <div v-if="user">welcome {{ user[0].fullName }}</div>
        <div v-else>
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
                  <input
                    type="submit"
                    class="btn1 btn-lg btn btn-block"
                    value="Sign In"
                  />
                </div>
                <div v-if="user">
                  <h2>login hjuhyujhyu</h2>
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
  </div>
</template>

<script>
export default {
  data() {
    // insert empty object into form
    return {
      email: null,
      password: null,
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
</style>
