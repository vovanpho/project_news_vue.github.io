import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        q:[
            {id:0, name:'general'},
            {id:1, name:'business'},
            {id:2, name:'entertainment'},
            {id:3, name:'health '},
            {id:4, name:'science'},
            {id:5, name:'sports'},
            {id:6, name:'technology'},
        ]

    },
    
})
// top-headlines? country=us&category=business sources=techcrunch       entertainment    
      // everything? domains=wsj.com
      // sources? sources?language=en language=en&country=us
      // World U.S. Politics N.Y. Business 
      // Opinion: Tech Science Health Sports Arts Books Style Food Travel
      //  Magazine: T Magazine Real Estate Video
