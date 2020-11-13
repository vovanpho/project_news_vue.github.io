import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: null
  },
  getters:{
    allItems:(state)=>state.items,
    getItem: (state)=>(tindex)=>{
      return state.items.filter((item,index)=>index === Number(tindex))[0]
    }
  },
  mutations: {
    AXIOS_ITEM(state,items){
      state.items = items
      console.log(items)
    }
  },
  actions: {
   axiosItems({commit}){
      axios.get("http://newsapi.org/v2/everything?q=apple&from=2020-11-02&to=2020-11-02&sortBy=popularity&apiKey=502b88d5a5f748c1a4af8ddbb30374e8")
      .then(Response=>{commit("AXIOS_ITEM", Response.data.articles);
    })
      .catch(console.error(),this.errored = true)
      .finally(() => (this.loading = false));
   },
  },
  modules: {},

 
 
});


