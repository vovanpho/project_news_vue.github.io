import Vue from "vue";
import Vuex from "vuex";
import thoiGian from "../../service/thoiGian";

Vue.use(Vuex);

const state = {
    urlOption: {
        q: "us",
        // qInTitle: null,
        sources: "us",
        domains: "bbc.co.uk",
        // excludeDomains: null,
        from: thoiGian.state.isodate,
        to: thoiGian.state.isodate,
        language: "en",
        sortBy: "publishedAt",
        pageSize: 50,
        page: 20,
        apiKey: "502b88d5a5f748c1a4af8ddbb30374e8"
    }
}
const getters = {

}

const mutations = {
    
}

const actions = {
    
}

const modules = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    modules
};

