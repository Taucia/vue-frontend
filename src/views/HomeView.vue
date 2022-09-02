<template>
	
  <div slider="center: true" >
    <div class="position-relative visible-toggle dark" tabindex="-1">
      <ul
        class="slider-items child-width-1-2@s child-width-1-4@l child-width-1-4@m grid"
      >
        <li>
          <div class="panel container">
            <div class=" box-container row">
              <div v-for="product in products" :key="product" class="card col-sm-5">
                <div class="pic">
                  <img
                    class="book-card__img img-fluid"
                    :src="product.img"
                    :alt="product.title"
                  />
                </div>
                <div class="content">
                  <h3 class="title">{{ product.title }}</h3>
                  <span> {{ product.author }}</span>
                </div>
                <div class="social">
                  <router-link
                    :to="{ name: 'product', params: { id: product.id } }"
                  >
                    <button id="adminButton" class="btn btn">book</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <a
        class="position-center-left position-small hidden-hover"
        href="#"
        slidenav-previous
        slider-item="previous"
      ></a>
      <a
        class="position-center-right position-small hidden-hover"
        href="#"
        slidenav-next
        slider-item="next"
      ></a>
    </div>

    <ul class="slider-nav dotnav flex-center margin"></ul>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
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
.box-container {
  display: flex;
  width: 100%;
  height: 100vh;

  align-items: center;
  background: #fff;
  justify-content: flex;
  flex-direction: row;
  flex-flow: row nowrap;
  /*%%%%%%%%
   %% CARD %%
   %%%%%%%%*/
  /*%% End card %%*/
}
.box-container .card {
  position: relative;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  background: #f5f6fa;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}
.box-container .card:before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 0;
  background: #64b3f4;
  transition: all 0.5s ease;
}

.box-container .card:hover .pic {
  width: 120px;
  height: 120px;
  margin-top: 50px;
  box-shadow: 0px 0px 10px 1px #888;
}

.box-container .card .pic {
  position: relative;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
  width: 140px;
  height: 140px;
  overflow: hidden;
  transition: all 0.5s ease;
  background: #fff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}
.box-container .card .pic img {
  width: 100%;
  height: 100%;
}
.box-container .card .content {
  margin-top: 90px;
  text-align: center;
  padding: 0 30px;
  color: #2d3436;
  transition: margin-right 0.5s ease;
}
.box-container .card .content .title {
  margin-bottom: 0;
  font-family: "Yantramanav", sans-serif;
  font-size: 22px;
}
.box-container .card .content span {
  font-size: 12px;
  letter-spacing: 1.5px;
}
.box-container .card .content p {
  margin: 20px 0;
  font-size: 12px;
  line-height: 1.6;
  color: #b0b0b0;
}
/*%% End container %%*/
</style>
