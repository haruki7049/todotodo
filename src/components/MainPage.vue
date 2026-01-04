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

  <main>
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  width: 100%;

  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: border-color 0.25s;
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
