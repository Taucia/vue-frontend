import {
  createStore
} from 'vuex'
import router from '@/router';
const fulstack_capstone_taskUrl = 'https://library-apibackend.herokuapp.com/';

export default createStore({
  state: {
    users: null,
    products: null,
    product: null,
    user : null
  },
  getters: {
    getUsers: state => state.users,
    getUser: state => state.user,
    getProducts: state => state.products
  },
  mutations: {
    setUsers(state, users) {  
      state.users = users;
    },
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    }
  },
  actions: {
        // register
    register: async (context, payload) => {
      // fecth from body
      const { firstName, lastName, email, password } = payload;
      // fetch method from api
      await fetch("https://library-apibackend.herokuapp.com/register", {
      // await fetch("https://library-apibackend.herokuapp.com/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        // fetch data from form
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
    },
      // login
     // login
    login (context, payload){
      // console.log(payload);
    fetch("http://localhost:4000/login" , {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
     .then((response) => response.json())
     .then((data) => {
      // if (data.msg === "Login Failed.") {
      //  data.msg
      // } else {
      //   context.commit("setUser", payload);

      //   router.push({name: "home"})
      // }
      console.log(data);
     })
    },

      // get users
      getusers: async (context) => {
        let res = await fetch(fulstack_capstone_taskUrl + 'users');
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
        fetch(fulstack_capstone_taskUrl + 'users/' + id)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            context.commit('setUsers', data.results);
          })
      },
      // delete user
      deleteuser: async (context, id) => {
        fetch("https://library-apibackend.herokuapp.com/users/" + id, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => context.dispatch('getUsers'));
      },
      // update user
      updateuser: async (context, user) => {
              // fecth from body
              const { firstName,lastName, email, password } = payload;
              // fetch method from api
        fetch("https://library-apibackend.herokuapp.com/users/" + user.id, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
                  // fetch data from form
          body: JSON.stringify({
            firstName: firstName,
          lastName:lastName,
            email: email,
            password: password,
          }),
          })
          .then((res) => res.json())
          .then((data) => {
            alert(data.msg);
            context.dispatch("getUsers");
          });
      },
          // _____________
      // get products
      // async getProducts(context) {
      //   fetch(`https://library-apibackend.herokuapp.com/products`)
      //     .then((res) => res.json())
      //     .then((data) => context.state.products = data.results )
      // },
      getProducts: async (context) => {
          let res = await fetch('https://library-apibackend.herokuapp.com/products');
          let data = await res.json();
          let result = data.results;
          if(result){
            context.commit('setProducts', result)
          }else{
            console.log('loading...')
          }

      },

      // get single product  
      getproduct: async (context, Prod_id) => {
      // Product_id = 1
      fetch(fulstack_capstone_taskUrl+'products/' + Prod_id)
      .then((res) => res.json())
      .then((data) =>{
      console.log(data)
        context.commit("setProduct", data.results);
      })
      },

      // add product
      addProduct: async(context, payload) => {
      const { title, author,category, description, img, pdf} = payload;

      try{
        await fetch(RoastedBeansUrl+"products", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          titile: Prod_title,
          author:author,
          category: category,
          description: description,
          img: img, 
          pdf: pdf,
        
        }),
      })
        .then((response) => response.json)
        .then((json) => context.commit("setProducts", json.data));
        router.push({name: "admin"});
        
      }catch(e) {
      console.log(e);
      }
      },

      // delete product
      deleteProduct: async (context, Prod_id) => {
      fetch("https://library-apibackend.herokuapp.com//products/" + Prod_id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => context.dispatch('getProducts'));
      },
    // updates list
      updateProduct: async (context, product) => {
        // fetch("http://localhost:3000/products/" + product.id, {
        fetch("https://library-apibackend.herokuapp.com//products/" + product.Prod_id, {
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
  },
  modules: {}

})