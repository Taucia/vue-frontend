<template>
  <div id="main" class="products container">
    <h1>ALL PRODUCTS</h1>
    <div style="overflow-x: auto">
      <table class="table text-dark border-dark table-bordered">
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Description</th>
          <th>Category</th>
          <th>img</th>
          <th style="width: 200px">pdf</th>
              <button
                data-bs-toggle="modal"
                :data-bs-target="`#add`"
                class="btn btn-grad"
                id="prodButton"
              >
                ADD
              </button>
        </thead>

        <tbody>
          <tr v-for="product in products" :key="product.id">
            <th scope="row" class="p-5 pb-5">{{ product.id }}</th>
         
            <th scope="row">{{ product.title }}</th>

            <th scope="row">{{ product.author }}</th>
            <th scope="row">{{ product.description }}</th>
            <th scope="row">{{ product.category }}</th>
   <th scope="row"><img :src="product.img" :alt="product.title" /></th>
            <th scope="row"><a href="{{ product.pdf }}">Product PDF</a></th>

            <th scope="row text-center">
              <button
                data-bs-toggle="modal"
                :data-bs-target="`#edit` + product.id"
                class="btn btn-grad"
                id="prodButton"
              >
                Edit
              </button>

                
              <button @click="this.$store.dispatch('deleteProduct',product)"  class="btn btn-grad">
                Delete
              </button>
            </th>
            <!-- <DeleteProductModal :product="product" /> -->
            <editModal :product="product" />
            <!-- <editModal :product="product" /> -->
          </tr>
              <addModal :product="product"/>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import editModal from "../components/editModal.vue";
// import DeleteProductModal from "../components/DeleteProductModal.vue";
import addModal from "../components/addModal.vue";
export default {
    components: { editModal,addModal },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
<style scoped>
.pdf {
  width: 10px !important;
  height: 10px !important;
}
.desc {
  padding-left: 1rem;
  padding-right: 1rem;
}

img {
  width: 100px;
  height: 150px;
}
#main {
  padding: 120px 0;
}
#prodButton {
  width: 72.56px;
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
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid white;
}
th,
td {
  text-align: center;
  padding: 8px;
}

</style>
