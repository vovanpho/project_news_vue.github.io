import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        phut: new Date().getMinutes(),
        gio: new Date().getHours(),
        ngay: new Date().getDate(),
        thang: new Date().getMonth(),
        nam: new Date().getFullYear(),
        isodate: new Date().toISOString().substring(0,10)
    },
    getters:{
        
    }
})