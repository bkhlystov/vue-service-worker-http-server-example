<template>
  <div id="app">
    <button
      @click="makeAjax"
      class="btn"
    >New version available! Click to update</button>
  </div>
</template>

<script>
/* eslint-disable no-console, no-undef */

import apiClient from './api/index.js'

export default {
  name: "app",
  data() {
    return {
      refreshing: false,
      worker: null,
      updateExists: false
    };
  },
  created() {
    this.makeAjax();
  },
  methods: {
    async makeAjax() {
      const user_data = await apiClient.login();
      console.log(user_data);
    },
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e51;
  margin-top: 60px;
}

.btn {
  border: 1px solid #3a3a3a;
  border-radius: 4px;
  padding: 0.75rem;
  background-color: #3a3a3a;
  color: #fafafa;
  font-size: 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
