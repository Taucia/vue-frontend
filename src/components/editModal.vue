<template>
  <!-- Edit Modal -->
  <div
    class="modal fade"
    :id="'edit' + product.id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Product Admin</h5>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6 mx-auto mb-3">
              <label for="Title" class="form-label">Title:</label>
              <input
                type="text"
                class="modal-title"
                id="product_title"
                v-model="product.title"
                placeholder="product_title"
              />
            </div>
            <div class="col-md-6 mx-auto mb-3">
              <label for="Author" class="form-label">Author:</label>
              <input
                type="text"
                class="modal-title"
                id="Author"
                v-model="product.author"
                placeholder="Author"
              />
            </div>
            <div class="col-md-6 mx-auto mb-3">
              <label for="Description" class="form-label">Description</label>
              <input
                type="text"
                class="modal-title"
                id="Description"
                v-model="product.description"
                placeholder="Description"
              />
            </div>
            <div class="col-md-6 mx-auto mb-3">
              <label for="Category" class="form-label">Category</label>
              <input
                type="text"
                class="modal-title"
                id="Category"
                v-model="product.category"
                placeholder="Category"
              />
            </div>
            <div class="col-md-6 mx-auto mb-3">
              <label for="pdf" class="form-label">pdf</label>
          
              <input
                type="text"
                class="modal-title"
                id="pdf"
                v-model="product.pdf"
                placeholder="pdf"
              />
            </div>
            <div class="col-md-6 mx-auto mb-3">
              <label for="pdf" class="form-label">Image</label>
              <input
                type="text"
                class="modal-title"
                id="img"
                v-model="product.img"
                placeholder="img"
              />
            </div>
            
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            @click="edit"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
  methods: {
    edit() {
      return this.$store.dispatch("editProduct", this.product);
    },
  },
};
</script>
