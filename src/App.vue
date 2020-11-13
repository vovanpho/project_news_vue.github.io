<template>
  <div id="app">
    <div id="nav">
      <app-header/>
    </div>
    <router-view />
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue"
export default {
  components:{
    AppHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
ul,li {
  list-style: none;
  margin: 0;
  padding: 0;
}
h1, p{
  margin: 0;
}
</style>
