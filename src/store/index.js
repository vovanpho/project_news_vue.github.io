import Vue from "vue";
import Vuex from "vuex";
// import modEverything from "./modules/everything.js";
import modSources from "./modules/sources.js";
import modTopHeadling from "./modules/top-headlines.js";
import HTTP from "../service/httpCommont";
import urls from "./modules/paramEverything"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},

  modules: {
    modEverything: {
      namespaced: true,
      state: {
        items: null
      },
      getters: {
        getItems: state =>state.items,
        getItem: (state)=>(tindex) => {
          return state.items.filter((item, index) => index === Number(tindex))[0];
        },

      },
      mutations: {
        setDataEverything(state, all) {
          state.items = all;
        }
      },
      actions: {
        axiosEveItems({ commit }) {
          HTTP.getDataEverything(urls.state.urlOption)
            .then(Response => { commit("setDataEverything", Response.data.articles) })
            .catch(console.error(), (this.errored = true))
            .finally(() => (this.loading = false));
        }
      },
      modules: {
        urls
      }

    },
    modSources,
    modTopHeadling
  }
});

//  axiosItems({commit}){
//     axios.get("http://newsapi.org/v2/everything?q=development&from=2020-11-11&to=2020-11-13&sortBy=popularity&apiKey=502b88d5a5f748c1a4af8ddbb30374e8")
//     .then(Response=>{commit("AXIOS_ITEM", Response.data.articles);
//   })
//     .catch(console.error(),this.errored = true)
//     .finally(() => (this.loading = false));
//  },
// },"Access-Control-Allow-Headers": "x-requested-with, content-type"  "Access-Control-Allow-Origin":"*"
