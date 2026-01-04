<script setup>
import { ref } from "vue";

const todoData = [];
</script>

<template>
  <header>
    <div id="logo">
      <h1>TODOTODO</h1>
      <img src="../assets/vue.svg">
    </div>

    <div id="searchTextBox">
      <input type="text" id="search" />
      <button type="submit">Search</button>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

div#logo {
  display: flex;
  align-items: center;
  justify-content: start;
}

div#searchTextBox {
  display: flex;
  align-items: center;
  justify-content: start;
}

header h1 {
  margin: 20px;
  font-size: 2.0em;
}

header img {
  margin: 20px;
}

header input {
  margin: 20px;
  font-size: 18px;
  height: 40px;
  width: 100%;
}
</style>
