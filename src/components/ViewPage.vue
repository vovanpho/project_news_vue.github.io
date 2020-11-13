<template>
  <div class="viewPage">
      <div class="divImg">
          <img :src="item.urlToImage" alt="">
          <p>{{item.source.name}}</p>
      </div>
      <div class="viewContent">
          <title>{{item.title}}</title>
          <div>
              <span>Author: {{item.author}} </span><br>
              <span>Update: {{item.publishedAt}}</span>
          </div>
          <div>
              <p>{{item.content}}</p>
          </div>
          <a @click="func(item.url)">{{item.url}}</a>
      </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
    name:"ViewPage",
    data(){
        return{
            item: null
            //this.$store.getters.getItem(this.$route.params.id)
        }
    },
    // computed:{
    //     ...mapGetters([
    //         'getItem'
    //     ])
       
    // },
    // mounted(){
    //     this.$store.dispatch("axiosItems")
    // },
    created() {
    axios
      .get(
        "http://newsapi.org/v2/everything?q=apple&from=2020-11-02&to=2020-11-02&sortBy=popularity&apiKey=502b88d5a5f748c1a4af8ddbb30374e8"
      )
      .then(Response => {
        Response.data.articles.filter((e,index) =>{
            if(index == this.$route.params.id) {
                this.item =e
            }
        })
      })
      .catch(console.error(), (this.errored = true))
      .finally(() => (this.loading = false));
  },
  method(){
      return{
          func(e){
        console.log(e)
        }
      }
      
  }
    

}



</script>

<style>
.viewPage .divImg img {
  width: 60%;
}
</style>