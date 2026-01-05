<script setup>
import { ref } from "vue";

const todoData = ref([]);
const text = ref("");

function addTodo() {
  if (text.value.trim() !== "") {
    todoData.value.push({ memo: text.value });
    text.value = "";
  }
}

function removeTodo(index) {
  todoData.value.splice(index, 1);
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
      <li v-for="(item, index) in todoData" :key="index">
        <button class="deleteButton" @click="removeTodo(index)">×</button>
        <p>{{ item.memo }}</p>
      </li>
    </ul>
  </main>
</template>
