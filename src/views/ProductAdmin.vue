<template>
  <div id="main" class="products container">
    <h1>ALL PRODUCTS</h1>
      <div style="overflow-x:auto">
              <table class="table text-dark border-dark table-bordered">
      <thead>
    <th>ID</th>
    <th>Title</th>
    <th>Author</th>
    <th>Description</th>
    <th>Category</th>
    <th>img</th>
    <th>pdf</th>
  
</thead>

         
          
      
      
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <th scope="row" class="p-5 pb-5">{{ product.id }}</th>
          <th scope="row">{{ product.title }}</th>
       
           <th scope="row">R{{ product.author }}</th>
           <th scope="row">{{ product.description }}</th>
           <th scope="row">{{ product.category }}</th>
          <th scope="row"><img :src= "product.img" :alt="product.title" /></th>
             <th scope="row" class="pdf p-0 m-0">{{ product.pdf }}</th>
          
         
          <th scope="row">
            <button
              data-bs-toggle="modal"
              :data-bs-target="`#editProduct` + product.id"
              class="btn btn-grad"
              id="prodButton"
            >
              Edit
            </button>
            <button
              data-bs-toggle="modal"
              :data-bs-target="`#deleteProduct` + product.id"
              class=" btn btn-grad"
              id="prodButton"
            >
              Delete
            </button>
          </th>
          <EditProductModal :product="product" />
          <DeleteProductModal :product="product" />
        </tr>
      </tbody>
    </table>
      </div>
    <AddProductModal />
  </div>
</template>
<script>
// import EditProductModal from "../components/EditProductModal";
// import DeleteProductModal from "../components/DeleteProductModal.vue";
// import AddProductModal from "../components/AddProductModal.vue";
export default {
//   components: { EditProductModal, DeleteProductModal, AddProductModal },
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

.pdf{
  width:10px !important;
  height:10px !important;
}
.desc{
  padding-left: 1rem;
   padding-right: 1rem;
}

img{
    width: 100px;
    height: 150px;
}
#main{
  padding: 120px 0;
}
#prodButton{
  width:72.56px;
}.btn{
    background-image: linear-gradient(
    to right,
    #22b1b1 0%,
    #2f7474 51%,
    #22b1b1 100%
  );
  margin: 10px;
  padding: 10px 25px;
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
th, td {
  text-align: center;
  padding: 8px;
}
</style>



