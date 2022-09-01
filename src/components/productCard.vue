<template>
 <div id="card" v-for="product in products" :key="product">
  <div class="card">
  <div class="card-info">
    <p class="title">Magic Card</p>
     <p>{{ product.title }}</p>
            <p>{{ product.description }}</p>
            <p><img :src= "product.img" :alt="product.title" /></p>
          </div>
          </div>
        
  </div>



<!-- <div
    class="col-md-6 col-lg-4 col-sm-10"
  >
    <section class="card-content">
      <div class="card-content">
        <div class="card">
          <div class="layer"></div>
          <div class="content">
            <div class="image">
              <img :src="product.imgurl" alt="avatar" />
            </div>
            <br />
            <div class="details ">
              <span>{{ product.title }}</span>
              <div class="col-12">
             <span>
              <img :src= "product.img" :alt="product.title" />
                </span> </div>
                <div class="btn-flex">
            <ul class="d-flex flex-row">
              <li>
  <router-link :to="{ name: 'product', params: { id: product.id } }">
<button type="button" class="btn btn-grad"><i class="bi bi-search"> </i>
             view
             </button>
              </router-link>
             
             
            </li>
            <li>
              <button type="button " class="btn btn-grad mx-2"><i class="bi bi-cart-fill"></i> 
              Add to cart</button>
            </li>
              </ul>      


  
                </div>
                
                 
            </div>
          </div>
        </div>
      </div>
    </section>
  </div> -->
</template>

<script>

export default {
props: ["product"],
computed: {
        products() {
            return this.$store.state.products;
    },
  },
    mounted() {
        this.$store.dispatch("getProducts");
    },
};


</script>

<style scoped>
/* From uiverse.io by @alexruix */
.card {
 --background: linear-gradient(
    to right,
    #2f7474 0%,
    #22b1b1 51%,
    #2f7474 100%
  );
 width: 190px;
 height: 254px;
 padding: 5px;
 border-radius: 1rem;
 overflow: visible;
 background: #2f7474;
 background: var(--background);
 position: relative;
 z-index: 1;
}

.card::after {
 position: absolute;
 content: "";
 top: 30px;
 left: 0;
 right: 0;
 z-index: -1;
 height: 100%;
 width: 100%;
 transform: scale(0.8);
 filter: blur(25px);
 background: #2f7474;
 background: var(--background);
 transition: opacity .5s;
}

.card-info {
 --color: white;
 background: var(--color);
 color: var(--color);
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;
 overflow: visible;
 border-radius: .7rem;
}

.card .title {
 font-weight: bold;
 letter-spacing: .1em;
}

/*Hover*/
.card:hover::after {
 opacity: 0;
}

.card:hover .card-info {
 color: #f7ba2b;
 transition: color 1s;
}

</style>
