<template>
  <div id="root">
    <div id="panel">
      <h1>Add stop</h1>
      <label>
        <input type="number" class="form-control" name="stopid" v-model="addStopInput.id" placeholder="Stop id"/>
      </label>
      <button class="btn btn-info" type="button" v-on:click="addStop()">Add</button>
    </div>
    <div id="panel2">
      <h1>Remove stop</h1>
      <label>
        <input class="form-control" type="number" name="stopid" v-model="removeStopInput.id" placeholder="Stop id"/>
      </label>
      <button class="btn btn-info" type="button" v-on:click="removeStop()">Del</button>
    </div>
    <div id="info">
      <label v-if="info !== ''">{{info}}</label>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from 'vue'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

export default {
  name: "StopManagement",
  data() {
    return {
      addStopInput: {
        id: "",
      },
      removeStopInput: {
        id: "",
      },
      info: "",
      username: Vue.$cookies.get('username'),
    }
  },
  methods: {
    addStop() {
      if (this.addStopInput.id !== "") {
        axios.put('http://localhost:3000/users/addStop/' + this.username + '/' + this.addStopInput.id).then(function (result) {
          if (result.data !== null && result.data !== false) {
            Vue.$cookies.set("stopsId", JSON.stringify(result.data), "15MIN");
            window.location.reload()
          }
        });
      } else {
        console.log("A username and password must be present");
      }

      this.info = "Cannot add user already have stop: " + this.addStopInput.id;
    },
    removeStop() {
      if (this.removeStopInput.id !== "") {
        axios.delete('http://localhost:3000/users/removeStop/' + this.username + '/' + this.removeStopInput.id).then(function (result) {
          if (result.data !== null && result.data !== false) {
            Vue.$cookies.set("stopsId", JSON.stringify(result.data), "15MIN");
            window.location.reload()
          }
        });

        this.info = "Cannot remove user does not have stop: " + this.removeStopInput.id;
      } else {
        console.log("A username and password must be present");
      }
    }
  }
}
</script>

<style scoped>
#panel {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: inline-block;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 25px;
}

#panel2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: inline-block;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 25px;
}

#info {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  display: inline-block;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 25px;
}
</style>