<script setup>
import { ref } from "vue";

var jsonData;
try {
  jsonData = JSON.parse(localStorage.getItem("todoData"));
} catch (error) {
  console.warn(error);
  console.warn("Sets an empty array...");
  jsonData = [];
}

const text = ref("");
const todoData = ref(jsonData);

function addTodo() {
  // Prevent submission during IME composition
  if (event && event.isComposing) {
    return;
  }

  if (text.value.trim() !== "") {
    todoData.value.push({ memo: text.value });
    text.value = "";

    // Re-set todoData after adding the data
    localStorage.setItem("todoData", JSON.stringify(todoData.value));
  }
}

function removeTodo(index) {
  console.log(index);
  console.log(todoData.value);

  todoData.value.splice(index, 1);

  // Re-set todoData after deleting the data
  localStorage.setItem("todoData", JSON.stringify(todoData.value));
}
</script>

<template>
  <header>
    <div id="logo">
      <h1>TODOTODO</h1>
      <img src="../assets/vue.svg" />
    </div>

    <div id="searchTextBox">
      <input type="text" name="search" placeholder="Search..." />
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
        @keydown.enter="addTodo"
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
