<script setup>
import { ref } from "vue";

const todoData = ref([{ memo: "HOGEHOGE" }, { memo: "FUGAFUGA" }]);
const text = ref("");

function addTodo() {
  if (text.value.trim() !== "") {
    todoData.value.push({ memo: text.value });
    text.value = "";
  }
}
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
      <input
        type="text"
        v-model="text"
        name="todoBox"
        placeholder="Enter your TODO..."
        @keyup.enter="addTodo"
      />
      <button type="submit" @click="addTodo">Submit</button>
    </div>

    <ul>
      <li v-for="item in todoData">
        {{ item.memo }}
      </li>
    </ul>
  </main>
</template>
