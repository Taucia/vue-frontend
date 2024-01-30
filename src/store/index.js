import {
  createStore
} from 'vuex'
import router from '@/router';
const fullstack_capstone_taskUrl = 'https://tjlibrary.onrender.com/';

export default createStore({
  state: {
    users: null,
    pdfID: null,
    products: null,
    product: null,
    user: null || JSON.parse(localStorage.getItem('user')),
    token:null|| localStorage.getItem("token"),
    cart: null,
  },
  getters: {
    getUsers: state => state.users,
    getUser: state => state.user,
    getProducts: state => state.products,
    getCart: state => state.cart,

  },
  mutations: {
    settoken: (state, token) => {
      localStorage.setItem("token", token);
      state.token = token;},
    // Get the ID from the pdf link
    setPdfId(state, book) {
      let fstIndex = book.indexOf('d/')+2;
      let lstIndex = book.lastIndexOf('/');     
      let id = book.substring(fstIndex, lstIndex);
      state.pdfID = id;
    },  
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user
      localStorage.setItem("user",JSON.stringify(user));
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setCart(state, cart) {
      state.cart = cart;
    }
  },
  actions: {
    // register
    register: async (context, payload) => {
      // fecth from body
      const {
        firstName,
        lastName,
        email,
        password
      } = payload;
      // fetch method from api
      // await fetch("https://tjlibrary.onrender.com/register", {
      await fetch("https://tjlibrary.onrender.com/register", {
          // await fetch("https://tjlibrary.onrender.com/register", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          // fetch data from form
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
          }),
        })
        .then((response) => response.json())
        .then((data) => {
          context.commit('setUser', data.userData);
          router.push({name:'login'})
        })
    },
    // login
    // login
    login(context, payload) {
      // console.log(payload);
      fetch("https://tjlibrary.onrender.com/login", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(payload),
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg === "Login Failed.") {
            data.msg
          } else {
            console.log(data)
            context.commit("setUser", data.user[0]);
            router.push({
              name: "home"
            })
            context.dispatch('getCart', data.user[0].id);
          }
          console.log(data);
        })
    },
    logout(context){
      context.state.user = null
      localStorage.removeItem('user')
      console.log("drfghjkhgfghjhgffghkjh")
      window.location.reload()
    },
    // get users
    getusers: async (context) => {
      let res = await fetch(fullstack_capstone_taskUrl + 'users');
      let data = await res.json();
      let result = data.results;

      if (result) {
        context.commit('setUsers', result)
      } else {
        console.log(`Loading...`);
      }
    },
    // get single user
    getuser: async (context, id) => {
      fetch(fullstack_capstone_taskUrl + 'users/' + id)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.commit('setUsers', data.results);
        })
    },
    // delete user
    deleteuser: async (context, id) => {
      fetch("https://tjlibrary.onrender.com/users/" + id, {
          method: "DELETE",
        })
        .then((res) => res.json())
        .then(() => context.dispatch('getusers'));
    },
     // edit user
     edituser(context, user) {
      // fetch("https://tjlibrary.onrender.com/users/" + user.id, {
      fetch("https://tjlibrary.onrender.com/users/" + user.id, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((edituser) => edituser.json())
        .then((data) => {

          // if (data.msg === "Edit Failed.") {
          //   swal({
          //     icon: 'error',
          //     title: `${data.msg}`,
          //     buttons: false,
          //     timer: 2000,
          //   })
          // }
          // if (data.msg === "Edit Successfull.") {
          //   console.log(data)
          //   context.dispatch("getusers",
          //     swal({
          //       icon: "success",
          //       title: `${data.msg}`,
          //       buttons: false,
          //       timer: 1000,
          //     })
          //   )
          // }
          console.log(data.msg)
          context.dispatch('getusers')
        });
    },

    
    // _____________
    // get products
    // async getProducts(context) {
    //   fetch(`https://tjlibrary.onrender.com/products`)
    //     .then((res) => res.json())
    //     .then((data) => context.state.products = data.results )
    // },
    getProducts: async (context) => {
      let res = await fetch('https://tjlibrary.onrender.com/products');
      let data = await res.json();
      let result = data.results;
      if (result) {
        context.commit('setProducts', result)
      } else {
        console.log('loading...')
      }

    },

    // get single product  
    getproduct: async (context, Prod_id) => {
      // Product_id = 1
      fetch(fullstack_capstone_taskUrl + 'products/' + Prod_id)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.commit("setProduct", data.results);
        })
    },

    // add product
    addProduct: async (context, payload) => {
      const {
        title,
        author,
        category,
        description,
        img,
        pdf
      } = payload;

      try {
        await fetch("https://tjlibrary.onrender.com/products", {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
              title: title,
              author: author,
              category: category,
              description: description,
              img: img,
              pdf: pdf
            }),
          })
          .then((response) => response.json)
          // .then((json) => context.commit("setProducts", json.data));
          .then(() => context.dispatch('getProducts'))
        // router.push({name: "admin"});

      } catch (e) {
        console.log(e);
      }
    },
    // Edit GPU
    editProduct(context, product) {
      fetch(`https://tjlibrary.onrender.com/products/${product.id}`, {
          method: "PUT",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getProducts")
        });
    },

    // delete product
    deleteProduct: async (context, product) => {
      console.log(product);
      fetch("https://tjlibrary.onrender.com/products/" + product.id, {
          method: "DELETE",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((res) => res.json())
        .then((data) => {
          context.dispatch("getproducts");

        })
    },
    // updates list
    updateProduct: async (context, product) => {
      // fetch("http://localhost:3000/products/" + product.id, {
      fetch("https://tjlibrary.onrender.com/products/" + product.Prod_id, {
          method: "PUT",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getProducts");
        });
    },


    // add user
    adduser: async (context, payload) => {
      const {
        firstName,
        lastName,
        email,
        password
      } = payload;

      try {
        await fetch("https://tjlibrary.onrender.com/users", {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password

            }),
          })
          .then((response) => response.json)
          // .then((json) => context.commit("setProducts", json.data));
          .then(() => context.dispatch('getUsers'))
        // router.push({name: "admin"});

      } catch (e) {
        console.log(e);
      }
    },
    // get cart
    getCart: async (context, id) => {
      id = context.state.user.id
      // fetch
      let res = await fetch(
        `https://tjlibrary.onrender.com/users/${id}/cart`
      );
      let data = await res.json();
      let result = data.results;
      console.log(result)
      if (result == 'No items in cart') {
        console.log("No items in cart");
        console.log(result);
      } else {
        context.commit("setCart", JSON.parse(JSON.stringify(result)));
      }
    },

    addCart: async (context, product, id) => {
      // console.log(context.state.cart);
      id = context.state.user.id;
      console.log(product)
      await fetch(`https://tjlibrary.onrender.com/users/${id}/cart`, {
      // await fetch(`https://tjlibrary.onrender.com/users/${id}/cart`, {
          method: "POST",
          body: JSON.stringify({id : product}),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          context.dispatch("getCart", id)
        })
    },

    deleteItem: async (context, product, id) => {
      console.log(context.state.cart);
      id = context.state.user.id;
      console.log(product)
      await fetch(`https://tjlibrary.onrender.com/users/${id}/cart/${product.cart_id}`, {
      // await fetch(`https://tjlibrary.onrender.com/users/${id}/cart`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          context.dispatch("getCart", id)
        })
    },

    clearCart: async (context, id) => {
      console.log(context.state.cart);
      id = context.state.user.id;
      // console.log(product)
      await fetch(`https://tjlibrary.onrender.com/users/${id}/cart`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          context.dispatch("getCart", id)
        })
    },
  },
  modules: {}

})