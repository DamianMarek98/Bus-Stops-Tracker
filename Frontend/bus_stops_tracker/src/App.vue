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

export default {
  name: 'App',
  components: {
    UserView,
    Login,
  },
  methods:{
  }
}
</script>


<style>

</style>
