import Vue from "vue";
import Vuex, { Store } from "vuex";
import axios from "axios";
// import qs from "qs";
import dateWithLocal from "./modules/dateWithLocal.js"
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
// import { get } from "core-js/fn/dict";
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
      console.log(items)
      console.log(state.nam)
    }
  },
  actions: {
  //  axiosItems({commit}){
  //     axios.get("http://newsapi.org/v2/everything?q=development&from=2020-11-11&to=2020-11-13&sortBy=popularity&apiKey=502b88d5a5f748c1a4af8ddbb30374e8")
  //     .then(Response=>{commit("AXIOS_ITEM", Response.data.articles);
  //   })
  //     .catch(console.error(),this.errored = true)
  //     .finally(() => (this.loading = false));
  //  },
  // },
    axiosItems({commit}){
       axios.get('http://newsapi.org/v2/everything',{params: this.getters.axiosParams})
      .then(Response=>{commit("AXIOS_ITEM", Response.data.articles);})
      .catch(console.error(),this.errored = true)
      .finally(() => (this.loading = false));
   },
  },
  watch:{
    
  },
  modules: {
    a:{
      namespaced: true,
      dateWithLocal
    }
    
  }

  
})


