import Vue from "vue";
import Vuex from "vuex";

import HTTP from "../../service/httpCommont";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    items: null,
    urlOption: {
      category: "business",
      language: null,
      country: null,
      apiKey: "502b88d5a5f748c1a4af8ddbb30374e8"
    }
  },
  getters: {
    allItems: state => state.items,
    axiosParams(state) {
      const params = new URLSearchParams();
      params.append("category", state.urlOption.category);
      params.append("language", state.urlOption.language);
      params.append("country", state.urlOption.country);
      params.append("apikey", state.urlOption.apiKey);
      return params;
    }
  },
  mutations: {
    AXIOS_ITEM(state, items) {
      state.items = items;
    }
  },

  actions: {
    axiosSourcesItems({ commit }) {
      HTTP.getDataSources(this.getters.axiosParams)
        .then(Response => {
          commit("AXIOS_ITEM", Response.data.articles);
        })
        .catch(console.error(), (this.errored = true))
        .finally(() => (this.loading = false));
    }
  },

  modules: {}
};
