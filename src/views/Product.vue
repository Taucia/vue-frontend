<template>
  <main>
    <div
      class="book-card container text-center pt-5 pb-5 m-5"
      v-if="product"
      id="prod_id"
    >
      <div class="book-card__cover">
        <div class="book-card__book">
          <div id="card" class="book-card__book-front">
            <img
              class="book-card__img"
              :src="product[0].img"
              :alt="product.title"
            />
          </div>
          <div class="book-card__book-back"></div>
          <div class="book-card__book-side"></div>
        </div>
      </div>
      <div class="row">
        <div class="book-card__title">
          {{ product[0].title }}
        </div>
        <div class="book-card__author">
          {{ product[0].author }}
        </div>
        <div class="">
          {{ product[0].description }}
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <button class="col-6 btn1 btn-lg btn btn-block">Download</button>
        <button class="col-6 btn1 btn-lg btn btn-block">Read</button>
      </div>
      <hr>
      <button @click="this.$store.dispatch('addCart',product[0])">Add to cart</button>
    </div>
  </main>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getproduct", this.$route.params.id);
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body,
html {
  height: 100%;
}

.btn1:hover {
  color: #2f7474;
}

.btn {
  color: #22b1b1;
}
.btn:hover {
  color: #2f7474;
}
body {
  display: flex;
  color: #313131;
  font-family: "Times New Roman", serif;
  background-color: #673ab7;
  background: linear-gradient(45deg, #673ab7 0%, #8a22aa 100%);
  align-items: center;
  justify-content: center;
  display: inline;
}

main {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-row;
  flex-direction: column-reverse;
}
.book-card {
  width: 700px;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(98, 64, 140, 0.23);
  align-items: center;
  justify-content: fit-content;
}
.book-card .book-card__cover {
  position: relative;
  width: 250px;
  height: 350px;
  margin: 0 auto 8px auto;
  perspective: 1000px;
}
.book-card .book-card__book {
  height: 100%;
  transform-style: preserve-3d;
  transition: all 250ms ease;
}
.book-card .book-card__book-front {
  position: absolute;
  height: 100%;
}
.book-card .book-card__book-back {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  transform: translateZ(-40px);
}
.book-card .book-card__book-side {
  position: absolute;
  top: 5px;
  bottom: 5px;
  right: -29px;
  width: 40px;
  background-size: 5px;
  background-color: #e1e1e1;
  background-image: linear-gradient(to right, #ccc 35%, #e1e1e1 35%);
  opacity: 0;
  transform: rotate3d(0, 1, 0, 90deg);
}
.book-card .book-card__img {
  width: 100%;
  height: 100%;
  background-color: #e1e1e1;
}
.book-card .book-card__title {
  font-size: medium;
  margin-bottom: 8px;
}
.book-card .book-card__author {
  color: #757575;
  font-size: 15px;
}
.book-card:hover .book-card__book {
  transform: rotate3d(0, -1, 0, 30deg) translate(-15px, -30px);
}
.book-card:hover .book-card__book-back {
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.35);
}
.book-card:hover .book-card__book-side {
  opacity: 1;
}
</style>
