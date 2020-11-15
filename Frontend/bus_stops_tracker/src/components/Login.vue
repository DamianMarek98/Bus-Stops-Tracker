<template>
  <div>
    <NavBar></NavBar>
    <div id="login">
      <h1>Login</h1>
      <label>
        <input class="form-control" type="text" name="username" v-model="input.username" placeholder="Username"/>
      </label>
      <label>
        <input class="form-control" type="password" name="password" v-model="input.password" placeholder="Password"/>
      </label>
      <button class="btn btn-info" type="button" v-on:click="login()">Login</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from "@/components/NavBar";
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

export default {
  name: 'Login',
  components: {NavBar},
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      if (this.input.username !== "" && this.input.password !== "") {
        axios.get('http://localhost:3000/users/' + this.input.username + '/' + this.input.password).then(function (result) {
          if (result.data !== null) {
            Vue.$cookies.set("username", result.data.username, "15MIN");
            Vue.$cookies.set("stopsId", JSON.stringify(result.data.stops), "15MIN");
            window.location.reload()
          }
        });
      } else {
        console.log("A username and password must be present");
      }
    }
  }
}
</script>

<style scoped>
#login {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>