import Vue from "vue";
import Vuex, { Store } from "vuex";
import dateWithLocal from "./modules/everything.js"
import HTTP from "../service/httpCommont"


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: null,
    urlOption:{
      q:'us'|| null,
      from: dateWithLocal.state.isodate,
      to: dateWithLocal.state.isodate, 
      sortBy: 'popularity',
      apiKey: '502b88d5a5f748c1a4af8ddbb30374e8',
    },
  },
  getters:{
    allItems:(state)=>state.items,
    getItem: (state)=>(tindex)=>{
      return state.items.filter((item,index)=>index === Number(tindex))[0]
    },
    axiosParams(state){
      const params = new URLSearchParams();
      params.append('q', state.urlOption.q);
      params.append('from', state.urlOption.from);
      params.append('sortBy', state.urlOption.sortBy);
      params.append('apikey',state.urlOption.apiKey);
      return params;
    }

  },
  mutations: {
    AXIOS_ITEM(state,items){
      state.items = items
    }
  },

  actions: {
    axiosItems({commit}){
       HTTP.getData(this.getters.axiosParams)
      .then(Response=>{commit("AXIOS_ITEM", Response.data.articles);})
      .catch(console.error(),this.errored = true)
      .finally(() => (this.loading = false));
   },
  },
 
  modules: {
    a:{
      namespaced: true,
      dateWithLocal
    }
  }

})


//  axiosItems({commit}){
  //     axios.get("http://newsapi.org/v2/everything?q=development&from=2020-11-11&to=2020-11-13&sortBy=popularity&apiKey=502b88d5a5f748c1a4af8ddbb30374e8")
  //     .then(Response=>{commit("AXIOS_ITEM", Response.data.articles);
  //   })
  //     .catch(console.error(),this.errored = true)
  //     .finally(() => (this.loading = false));
  //  },
  // },"Access-Control-Allow-Headers": "x-requested-with, content-type"  "Access-Control-Allow-Origin":"*"
  