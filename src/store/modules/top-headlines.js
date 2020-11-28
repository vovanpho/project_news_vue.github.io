import Vue from "vue";
import Vuex from "vuex";
import HTTP from "../../service/httpCommont";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    items: null,
    urlOption: {
      country: "us",
      category: null,
      sources: null,
      q: null,
      pageSize: null,
      page: null,
      apiKey: "502b88d5a5f748c1a4af8ddbb30374e8"
    }
  },
  getters: {
    allItems: state => state.items,
    axiosParams(state) {
      const params = new URLSearchParams();
      params.append("country", state.urlOption.country);
      params.append("category", state.urlOption.category);
      params.append("sources", state.urlOption.sources);
      params.append("q", state.urlOption.q);
      params.append("pageSize", state.urlOption.pageSize);
      params.append("page", state.urlOption.page);
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
    axiosTopHeadLingItems({ commit }) {
      HTTP.getDataTopHeadLing(this.getters.axiosParams)
        .then(Response => {
          commit("AXIOS_ITEM", Response.data.articles);
        })
        .catch(console.error(), (this.errored = true))
        .finally(() => (this.loading = false));
    }
  },

  modules: {}
};
