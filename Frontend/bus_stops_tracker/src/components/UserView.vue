<template>
  <div>
    <NavBar></NavBar>
    <StopManagement></StopManagement>
    <StopTable v-for="stopId in JSON.parse($cookies.get('stopsId'))" :key=stopId v-bind:stop-id=stopId></StopTable>
  </div>
</template>
a
<script>
import NavBar from "@/components/NavBar";
import StopTable from "@/components/StopTable";
import StopManagement from "@/components/StopManagement";

export default {
  name: "UserView",
  components: {StopManagement, NavBar, StopTable},
}
</script>

<style scoped>

</style>