<template>
  <!-- Edit Modal -->
  <div
    class="modal fade"
    :id="'add'"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">add Product Admin</h5>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6 mx-auto mb-3">
              <label for="Title" class="form-label">Title:</label>
              <input
                type="text"
                class="modal-title"
                id="product_title"
                v-model="title"
                placeholder="product_title"
              />
            </div>
            <div class="col-md-6 mx-auto mb-3">
              <label for="Author" class="form-label">Author:</label>
              <input
                type="text"
                class="modal-title"
                id="Author"
                v-model="author"
                placeholder="Author"
              />
            </div>
            <div class="col-md-6 mx-auto mb-3">
              <label for="Description" class="form-label">Description</label>
              <input
                type="text"
                class="modal-title"
                id="Description"
                v-model="description"
                placeholder="Description"
              />
            </div>
            <div class="col-md-6 mx-auto mb-3">
              <label for="Category" class="form-label">Category</label>
              <input
                type="text"
                class="modal-title"
                id="Category"
                v-model="category"
                placeholder="Category"
              />
            </div>
            <div class="col-md-6 mx-auto mb-3">
              <label for="pdf" class="form-label">pdf</label>

              <input
                type="text"
                class="modal-title"
                id="pdf"
                v-model="pdf"
                placeholder="pdf"
              />
            </div>
            <div class="col-md-6 mx-auto mb-3">
              <label for="pdf" class="form-label">Image</label>
              <input
                type="text"
                class="modal-title"
                id="img"
                v-model="img"
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
            @click="add"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: null,
      author: null,
      category: null,
      description: null,
      img: null,
      pdf: null
    };
  },
  methods: {
    add() {
      return this.$store.dispatch("addProduct", {
        title: this.title,
        author: this.author,
        category: this.category,
        description: this.description,
        img: this.img,
        pdf: this.pdf,
      });
    },
  },
};
</script>
