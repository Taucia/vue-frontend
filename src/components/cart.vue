<template>
  <a
    data-bs-toggle="offcanvas"
    href="#offcanvasExample"
    role="button"
    aria-controls="offcanvasExample"
  >
    <i class="bi bi-bookmark-star-fill"></i>
  </a>

  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Wish List</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body text-black">
      <div v-for="(product, index) in cart" :key="index">
        {{ product.title }}
        <img
              class="book-card__img"
              :src="product.img"
              :alt="product.title"
            />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    user() {
      return this.$store.state.user;
    },
    mounted() {
      this.$store.dispatch("getUser");
      this.$store.dispatch("getCart");
      
    },
  },
};
</script>

<style scoped>
a {
  font-weight: bold;
  color: #cde5e5;
}

a.router-link-exact-active {
  color: #8db0b0;
}
.bi {
  background-color: #3c5454;
  border: none;
}
.button {
  color: #cde5e5;
  border: none;
}
</style>
