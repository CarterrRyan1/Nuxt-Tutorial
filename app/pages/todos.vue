<template>
    <div class="flex flex-col m-20 items-center min-h-screen">
        <div>
            <h1 class="text-center text-3xl underline mb-4">To-Do List</h1>
            <form @submit.prevent="addToDo" class="mb-4">
                <input v-model="newToDo" type="text" placeholder="New To-Do" class="border p-2 mr-2 rounded" />
                <button type="submit" class="border border-blue-400 rounded p-2">Add</button>
                <button @click.prevent="deleteAll" class="border border-red-400 rounded p-2 ml-2">Delete All</button>
            </form>
            <ul>
                <li v-for="(item, index) in toDos" :key="index" class="border rounded p-2 mb-2">
                    <span :class="{ 'line-through': item.completed }">{{ item.title }}</span>
                    <button @click="toggleComplete(index)" class="ml-2 border border-green-400 rounded p-1">
                        {{ item.completed ? 'Undo' : 'Complete' }}
                    </button>
                    <button @click="deleteToDo(index)" class="ml-2 border border-red-400 rounded p-1">Delete</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
interface ToDo {
    title: string;
    completed: boolean;
}
const newToDo = ref<string>('');
const toDos = ref<ToDo[]>([]);
const fetchToDos = async () => {
    const response: { success: boolean, todos: ToDo[], message: string } = await $fetch('/api/todo')
    if (response) {
        toDos.value = response.todos;
    }
}
const addToDo = async () => {
    if (newToDo.value.trim() === '') return;
    const response: { success: boolean, message: string } = await $fetch('/api/todo', {
        method: 'POST',
        body: { title: newToDo.value.trim() }
    })
    if (response.success) {
        newToDo.value = '';
        await fetchToDos();
    } else {
        alert('Failed to add To-Do: ' + response.message);
    }
}
const toggleComplete = async (index: number) => {
    if (index < 0 || index > toDos.value.length) return;
    if (toDos.value[index]) {
        const response: { success: boolean, message: string } = await $fetch('/api/todo', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                index,
                completed: toDos.value[index].completed
            }
        })
        if (response.success) {
            await fetchToDos();
        } else {
            alert('Failed to update To-Do: ' + response.message);
        }
    }
}
const deleteToDo = async (index: number) => {
    if (index < 0 || index > toDos.value.length) return;
    const response: { success: boolean, message: string } = await $fetch('/api/todo', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: { index }
    })
    if (response.success) {
        await fetchToDos();
    } else {
        alert('Failed to delete To-Do: ' + response.message);
    }
}
const deleteAll = async () => {
    const response: { success: boolean, message: string } = await $fetch('/api/todo', {
        method: 'DELETE'
    })
    if (response.success) {
        await fetchToDos();
    } else {
        alert('Failed to delete all To-Dos: ' + response.message);
    }
}
onMounted(async () => {
    await fetchToDos();
});
</script>
<style scoped>
.line-through {
    text-decoration: line-through;
}
</style>