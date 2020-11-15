<template>
  <div>
    <NavBar></NavBar>
    <StopTable v-for="stopId in JSON.parse($cookies.get('stopsId'))" v-bind:stop-id=stopId></StopTable>
  </div>
</template>
a
<script>
import NavBar from "@/components/NavBar";
import StopTable from "@/components/StopTable";

export default {
  name: "UserView",
  components: {NavBar, StopTable},
}
</script>

<style scoped>

</style>