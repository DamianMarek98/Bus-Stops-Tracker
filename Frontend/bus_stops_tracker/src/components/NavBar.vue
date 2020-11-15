<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Bus stop tracker</a>
    <a v-if="$cookies.get('username') !== null" class="navbar-brand" >hi: {{$store.getters.username}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      </ul>
      <button v-if="$cookies.get('username') !== null" class="btn btn-danger" type="submit" v-on:click="logOut">Logout</button>
    </div>
  </nav>
</template>

<script>
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import {store} from '../../store/store'
Vue.use(VueCookies)


export default {
  name: "NavBar",
  created() {
    this.saveUser();
  },
  methods: {
    logOut() {
      Vue.$cookies.remove("username");
      Vue.$cookies.remove("stopsId");
      window.location.reload()
    },
    saveUser() {
      store.commit('changeUser', Vue.$cookies.get("username"));
    }
  }
}

</script>

<style scoped>

</style>