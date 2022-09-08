<template>
  <div class="container-fluid px-lg-3">  
  
   
   
   
   
   <div class="row">
    <div class="col-md-3 col-sm-12 col-lg-3 px-5 mt-3">
      <select name="" v-model="category" id="" class="form-select btn1 btn1 text-center ">
        <option value="All" selected disabled>Filter by category</option>
        <option value="All">All</option>
        <option value="Romance">Romance</option>
        <option value="Action">Action</option>
        <option value="Young adult">Young Adult</option>
        <option value="Thriller">Thriller</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Fantasy">Fantasy</option>
      </select>
    </div>
    <div class="col-md-3 col-sm-12 col-lg-4 mt-3">
    <input v-model="search" type="text" class="form-control text-center input " name="" id="" placeholder="Search" >
    
    </div>
   </div>
    <div class="container-fluid">

    
   <button @click="authordes" class="btn btn bi">Author A-Z</button>
    
   
 <button @click="authorasc" class="btn btn bi">Author Z-A</button>


 <button @click="titledes" class="btn btn bi">Title A-Z</button>


 <button @click="titleasc" class="btn btn bi">Title Z-A</button>

    </div>

    <div class="row">
      <div
        class="book-card pt-5 pb-5 m-2 col"
        v-for="product in products"
        :key="product"
      >
        <div class="book-card__cover">
          <div class="book-card__book">
            <div id="card" class="book-card__book-front">
              <img
                class="book-card__img img-fluid"
                :src="product.img"
                :alt="product.title"
              />
            </div>
            <div class="book-card__book-back"></div>
            <div class="book-card__book-side"></div>
          </div>
        </div>
        <div>
          <div class="book-card__title col">
            {{ product.title }}
          </div>
          <div class="book-card__author col">
            {{ product.author }}
          </div>
          <div class="book-card__author col">
            {{ product.category }}
          </div>
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            <button id="adminButton" class="btn btn">View Products</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    category : "All",
    search : ""
  }
},

  computed: {
    products() {
      return this.$store.state.products;
    },
    products() {
      return this.$store.state.products?.filter((book) => {
        let isMatch = true;
        if (!book.title.toLowerCase().includes(this.search)) {
          isMatch = false;
        }
        if (this.category !== "All" && this.category !== book.category) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  methods: {

    authorasc() {
      let authora = this.$store.state.products;
      authora.sort((a, b) => {
        if (a.author < b.author) {
          return 1;
        }
        return -1;
      });
    },
    
    authordes() {
      let authord = this.$store.state.products;
      authord.sort((a, b) => {
        if (a.author > b.author) {
          return 1;
        }
        return -1;
      });
    },

    titleasc() {
      let titlea = this.$store.state.products;
      titlea.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        }
        return -1;
      });
    },
    titledes() {
      let titled = this.$store.state.products;
      titled.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        return -1;
      });
    },
  },
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
body {
  display: flex;
  color:#2f7474;
  font-family: "Times New Roman", serif;
  background-color: #22b1b1;
  background: linear-gradient(45deg, #22b1b1 0%, #22b1b1 100%);
  justify-content: center;
}
/* From uiverse.io by @Yaseen549 */
.input {
 color: #22b1b1;
 border: 1px solid #757575;
 border-radius: 2px;
 padding: 10px 25px;
 background: transparent;
 max-width: 200px;
 height:25px;
}

.input:active {
 box-shadow: 2px 2px 15px #22b1b1 inset;
}
.btn1:hover {
  color: #2f7474;
}

.btn1 {
  color: #22b1b1;
  
  
}
.btn1:hover {
  color: #2f7474;
}
.btn{
    background-image: linear-gradient(
    to right,
    #2f7474 0%,
    #22b1b1 51%,
    #2f7474 100%
  );
  margin: 10px;
  padding: 5px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 5px;
  font-size: 12px;
  height:25px;
  width:105px;
}

.btn:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
main {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: scroll;
}
.book-card {
  width: 300px;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
