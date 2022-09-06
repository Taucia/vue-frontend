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
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Wish List <i class="bi bi-star "></i> </h5>
            <button
                data-bs-toggle="modal"
                :data-bs-target="`#add`"
                class="btn btn-grad"
                id="prodButton">
                Clear
              </button>
      <button
        type="button"
        class="btn btn-grad"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >X</button>
      
    </div><hr>
    <div class="offcanvas-body text-black">
      <div v-for="(product, index) in cart" :key="index">
        <div class="container card row text-center">
              
            
 {{ product.title }}
            
   
            <div class="col">
 <img
              class="book-card__img"
              :src="product.img"
              :alt="product.title"
            />
            </div>
<button
                data-bs-toggle="modal"
                :data-bs-target="`#add`"
                class="btn btn-grad"
                id="prodButton"
              >
                delete
              </button>
        </div>
      
       
       
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
.offcanvas-title{
    text-decoration:underline;
}
/* From uiverse.io by @Sujitkavaiya */
.card {
 width: 100%;
 height: 100%;
 background: rgb(255, 255, 255);
 border-radius: 0.4em;
 box-shadow: 0.3em 0.3em 0.7em #00000015;
 transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
 border: rgb(250, 250, 250) 0.2em solid;
}

.card:hover {
 border: #006fff 0.2em solid;
}
.book-card__img{
height:50%;
width:50%;
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
.bi{
    color:#9ed4d4;
    background-color: #eee;
    height:50px;
    
}
hr{
    color:#2f7474;  
}
</style>
