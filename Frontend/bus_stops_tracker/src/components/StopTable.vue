<template>
  <div id="table">
    <h2> {{ tableNumber }}. Id przystanku: {{ stopId }} </h2>
    <vue-good-table style="width: 75%" class="center" :columns="columns" :rows="rows" :line-numbers="true"/>
  </div>
</template>

<script>
import axios from 'axios';
import {store} from "../../store/store";

export default {
  name: "stopTable",
  props: ['stopId'],
  data() {
    return {
      columns: [
        {
          label: "Numer linii",
          field: "routeId",
        },
        {
          label: "Kierunek",
          field: "headsign"
        },
        {
          label: "Szacowany czas przyjazdu",
          field: "estimatedTime",
          dateOutputFormat: 'HH:MM:SS',
        },
        {
          label: "Czas z rozkładu",
          field: "theoreticalTime",
          dateOutputFormat: 'HH:MM:SS',
        },
      ],
      rows: [],
      tableNumber: 0,
    }
  },
  created() {
    this.loadRows();
    this.loadDescription();
  },
  methods: {
    loadRows() {
      axios.get("https://ckan2.multimediagdansk.pl/delays", {
        params: {
          stopId: this.stopId
        }
      }).then(response => {
        if (response.data.delay !== undefined && response.data.delay !== null) {
          this.rows = response.data.delay;
        } else {
          this.rows = [];
        }
      });
    },
    loadDescription() {
      store.commit('increment');
      this.tableNumber = store.getters.count;
    }

  }
}
</script>

<style scoped>
#table {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 25px;
}


</style>