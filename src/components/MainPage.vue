<script setup>
import { ref } from "vue";

const todoData = ref([{ memo: "HOGEHOGE" }, { memo: "FUGAFUGA" }]);
</script>

<template>
  <header>
    <div id="logo">
      <h1>TODOTODO</h1>
      <img src="../assets/vue.svg" />
    </div>

    <div id="searchTextBox">
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </div>
  </header>

  <main>
    <div id="todoCreator">
      <input type="text" name="todoSubmit" />
      <button type="submit">Submit</button>
    </div>

    <ul>
      <li v-for="item in todoData">
        {{ item.memo }}
      </li>
    </ul>
  </main>
</template>
