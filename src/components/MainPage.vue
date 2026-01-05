<script setup>
import { ref, computed } from "vue";

let jsonData;
try {
  jsonData = JSON.parse(localStorage.getItem("todoData"));

  if (!Array.isArray(jsonData)) {
    console.warn("jsonData is not an array");
    console.warn("Sets an empty array...");
    jsonData = [];
    localStorage.setItem("todoData", JSON.stringify(jsonData));
  }
} catch (error) {
  console.warn(error);
  console.warn("Sets an empty array...");
  jsonData = [];
}

const text = ref("");
const searchQuery = ref("");
const todoData = ref(jsonData);

const filteredTodoData = computed(() => {
  return todoData.value.filter((item) => {
    return item.memo.includes(searchQuery.value);
  });
});

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
  // Find the actual item from filtered list and remove it from original data
  const itemToRemove = filteredTodoData.value[index];
  const actualIndex = todoData.value.indexOf(itemToRemove);

  if (actualIndex !== -1) {
    todoData.value.splice(actualIndex, 1);

    // Re-set todoData after deleting the data
    localStorage.setItem("todoData", JSON.stringify(todoData.value));
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
      <input type="text" name="search" v-model="searchQuery" placeholder="Search..." />
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
        @compositionstart="isComposing = true"
        @compositionend="isComposing = false"
      />
      <button type="submit" @click="addTodo">Submit</button>
    </div>

    <ul>
      <li v-for="(item, index) in filteredTodoData" :key="index">
        <button class="deleteButton" @click="removeTodo(index)">×</button>
        <p>{{ item.memo }}</p>
      </li>
    </ul>
  </main>
</template>
