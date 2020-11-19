<template>
  <div class="home">
    <section class="sectionOne">
    <!-- <comp-nav-bar></comp-nav-bar> -->
    <div class="divContentCal">
      <div class="items">
        <div class="item" v-for="(item, index) in items" :key="index">
          <img :src="item.urlToImage" alt="" />
          <div class="textItem">
            <div class="textContent">
              <a :href="item.url" target="_blank" rel="noopener noreferrer"><h3>{{ item.title }}</h3></a>
              <span>{{ item.author }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue"; cho component
// import CompNavBar from '../components/CompNavBar.vue';
export default {
  name: "Home",
  components:{
    // CompNavBar
  },
  computed:{
    items(){
      return this.$store.getters.allItems
    }
  },
  mounted(){
    this.$store.dispatch("axiosItems")
  },
 
};
</script>
<style>
.sectionOne {
  position: relative;
 
}
.sectionOne .divCate {
  height: 10rem;
  background-color: #333;
  text-align: center;
  color: white;
  margin: 20px;
}
/* .sectionOne .contentCal {
} */
.sectionOne .divContentCal .items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.sectionOne .divContentCal .items .item {
  position: relative;
  width: 20rem;
  margin: 10px 0;
  border: 1px solid;
  box-sizing: border-box;
  border-radius: 3%;
  overflow: hidden;
}
.items .item img {
  width: 100%;
  height: 160px;
}

/* .item .textItem {
} */
/* .item .textItem .textContent::before{
  position:absolute;
  left: 0;
  content: '';
  height: 5rem;
  border-left: 1px solid #333;
} */
.item .textItem .textContent span {
  margin-left: 1rem;
}
.item .textItem .textContent a{
  text-decoration:  none;
}
/* 
https://blog.logrocket.com/how-to-consume-apis-with-vuex-and-axios/
https://medium.com/@magyarn/building-an-online-store-with-vue-cli-part-4-612d99230f92

 */
</style>