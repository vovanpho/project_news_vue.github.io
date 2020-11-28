<template>
  <div class="divCate">
    <div class="divBarTop">
      <ul>
        <li></li>
      </ul>
    </div>
    <div class="divBarBotton">
      <div class="divBarleft"></div>
      <div class="divBarCenter"></div>
      <div class="divBarRight">
        <p>{{ timzz }}</p>
        <p>
          <img />
          <span></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CompNavBar",
  data() {
    return {
      timzz: null
    };
  },
  created() {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=5c5b6d936d964cbaa4d71311201811&q=Ho_Chi_Minh"
      )
      .then(Response => {
        this.timzz = Response;
      })
      .catch(console.error(), (this.errored = true))
      .finally(() => (this.loading = false));
  }
};
</script>

<style></style>
