<template>
  <div>
    <vue-good-table style="width: 75%" :columns="columns" :rows="rows"  />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "stopTable",
  props: ['stopId'],
  data() {
    return {
      columns: [
        {
          label: "Numer",
          field: "routeId",
        },
        {
          label: "Czas przyjadu",
          field: "estimatedTime",
        }
      ],
      rows: []
    }
  },
  created() {
    this.loadRows();
  },
  methods: {
    loadRows() {
      axios.get("https://ckan2.multimediagdansk.pl/delays", {
        params: {
          stopId: this.stopId
        }
      }).then(response => this.rows = response.data.delay);
    }
  }
}
</script>

<style scoped>

</style>