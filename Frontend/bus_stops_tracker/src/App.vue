<template>
  <div>
    <div>
      <Login v-if="$cookies.get('username') === null"></Login>
      <UserView v-if="$cookies.get('username') !== null"></UserView>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login";
import UserView from "@/components/UserView";
import { store }  from "../store/store";

export default {
  name: 'App',
  store,
  components: {
    UserView,
    Login
  },
  methods:{
  }
}
</script>


<style>

</style>
