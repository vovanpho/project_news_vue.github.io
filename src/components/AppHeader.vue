<template>
  <header class="appHeader">
    <div class="navBar">
      <div class="navBegin">
        <div class="divButtonMenu">
          <button class="navToggle" @click="showLinks = !showLinks" >
          <fontAwesomeIcon :icon="['fas', 'bars']" />
        </button>
        </div>
        <div class="divLogo">
          <h1><router-link to="/"><span>News</span><span></span></router-link></h1>
        </div>
        <div class="divUser">
          <p><fontAwesomeIcon :icon="['fas', 'user']" /></p>
        </div>
      </div>
      <div class="navCenter">
        <CompSearch/>
      </div>
      <ul class="navEnd" :class="{block:showLinks}" @mouseleave="showLinks=false">
        <li class="liSearch"><CompSearch/></li>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><a>Contact</a></li>
        <li><a>User</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
import CompSearch from "./CompSearch.vue"
import axios from "axios"
export default {
  name: "AppHeader",
  data() {
    return {
      showLinks: false,
      windowWidth: innerWidth,
      ngay: null
    };
  },
  components:{
    CompSearch,
  },
  computed: {},
  methonds:{
    
  },
  create(){
    axios
      .get("https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810,-119.6822510&timestamp=1331161200&key=AIzaSyAfEgNODpLvy7V-HIk5KW1CrGVQGhPkHnM")
      .then(Response => {this.ngay=Response})
      .catch(console.error(), (this.errored = true))
      .finally(() => (this.loading = false));
  }
  
};
// const navto= document.getElementsByClassName('navToggle')[0]
// navto.addEventListener('blur', )
</script>

<style>
.appHeader {
  position: fixed;
  background-color: white;
  z-index: 10;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 0 1rem 0 #efefef;
  text-align: left;
}
  

  /* .appHeader .navBar {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  
  .navBegin .navToggle {
    display: block;
  }
 
  
  .navEnd li {
    line-height: 3;
    font-size: 1rem;
    margin-right: 1rem;
  }
  
   */
@media (min-width: 1025px)  {
  
  .navBar .navBegin .navToggle {
    display: none;
  }
  .navBar .navBegin .divUser{
    display: none;
  }
  .navBar .navEnd .liSearch{
    display: none;
  }
  
  
}


@media screen and (max-width: 1024px) {
  .navBar .navCenter{
    display: none;
  }
  
  .navBegin{
    display: flex;
  }
  .navBegin .divButtonMenu{
    flex: 1;
  }
  .navBegin .divButtonMenu .navToggle {
    margin: 0.6rem;
  }
  .navBegin .divLogo{
    flex:1;
    text-align: center;
  }
  .navBegin .divUser{
    flex: 1;
    text-align: end;
  }
  .navBegin .divUser p{
    margin: 0.6rem;
  }
  .navBegin h1 a span {
    border: 3px solid;
    padding: 1px;
    font-size: 1.6rem;
  }

  .navBar .navEnd {
    display: none;
  }
  .navBar .block{
    display: block;
    padding: 1rem;
  }
  
}


</style>