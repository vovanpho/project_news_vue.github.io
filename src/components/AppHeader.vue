<template>
  <header class="appHeader">
    <div class="navBar">
      <div class="navBegin">
        <div class="divButtonMenu">
          <button class="navToggle" @click="showLinks = !showLinks">
            <fontAwesomeIcon :icon="['fas', 'bars']" />
          </button>
        </div>
        <div class="divLogo">
          <h1>
            <router-link to="/"
              ><span><strong>NEWS</strong> {{ nam }}</span
              ><br><span>{{ ngay }}/{{ thang }} </span
              ><span>{{ gio }}:{{ phut }}:{{giay}}</span></router-link
            >
          </h1>
        </div>
        <div class="divUser">
          <p><fontAwesomeIcon :icon="['fas', 'user']" /></p>
        </div>
      </div>
      <div class="navCenter">
        <CompSearch />
      </div>
      <ul
        class="navEnd"
        :class="{ block: showLinks }"
        @mouseleave="showLinks = false"
      >
        <li class="liSearch"><CompSearch /></li>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><a>Contact</a></li>
        <li><a>User</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
import CompSearch from "./CompSearch.vue";


export default {
  name: "AppHeader",
  data() {
    return {
      showLinks: false,
      nam: null,
      thang: null,
      ngay: null,
      gio: null,
      phut: null,
      giay: null,
      
    };
  },
  components: {
    CompSearch,
  },
  created(){
    setInterval(this.startTime, 500)
  },
  
  methods:{
    startTime() {
          const today = new Date();
          this.nam = today.getFullYear()
          this.thang = today.getMonth()
          this.ngay = today.getDate()
          this.gio = today.getHours()
          this.phut = today.getMinutes()
          this.giay = today.getSeconds()
    },
  }
 
}
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
  text-align: center;
}
.appHeader .navBar{
  padding: 10px;
}

.navBegin .divLogo h1 {
  line-height: 0.7em;

  
}
.navBegin .divLogo h1 span {
  border: 2px solid #42b983;
  padding: 1px;
  font-size: 1.6rem;
  box-sizing: border-box;
  color: #42b983;
}
.navBegin .divLogo h1 span:nth-child(1) {
  border: none;
  color: rgb(168, 145, 246);
  font-size: 24px;
}
.navBegin .divLogo h1 span:nth-child(3){
  font-size: 20px;
}
.navBegin .divLogo h1 span:nth-child(4) {
  border-left: none;
  color: black;
  border-bottom: none;
  font-size: 16px;
}



@media (min-width: 1025px) {
.appHeader .navBar {
  display: flex;
  align-items: center;
}

.navBar .navBegin {
  flex: 1;
}
  .navBar .navBegin .navToggle {
    display: none;
  }
  .navBar .navBegin .divUser {
    display: none;
  }

.navBar .navCenter {
  flex: 1;
  text-align: left;
}
.navBar .navEnd {
  flex: 1;
  
}
.navBar .navEnd li {
  display: inline-block;
  margin-right: 1rem;
}

  .navBar .navEnd .liSearch {
    display: none;
  }
}

@media screen and (max-width: 1024px) {
  .navBar .navCenter {
    display: none;
  }

  .navBegin {
    display: flex;
    align-items: center;
  }
  .navBegin .divButtonMenu {
    flex: 1;
    text-align: start;
  }
  .navBegin .divButtonMenu .navToggle {
    margin: 0.6rem;
    
  }
  .navBegin .divLogo {
    flex: 1;
    text-align: center;
  }
  .navBegin .divUser {
    flex: 1;
    text-align: end;
  }
  .navBegin .divUser p {
    margin: 0.6rem;
  }

  .navBar .navEnd {
    display: none;
    text-align: left;
  }
  .navBar .block {
    display: block;
    padding: 1rem;
  }
}
</style>