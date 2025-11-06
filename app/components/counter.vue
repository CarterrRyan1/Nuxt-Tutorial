<template>
        <div class="border border-solid border-black p-2 m-2 rounded-sm">
            <h1>Counter Component</h1>
            <p>{{ counter || 0 }}</p>
            <div>
                <button @click="add" class="rounded-sm bg-green-800 hover:bg-green-700 p-1 m-1 text-white">Add</button>
                <button @click="subtract"
                    class="rounded-sm bg-red-800 hover:bg-red-700 p-1 m-1 text-white">Subtract</button>
            </div>
        </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const counter = ref<number>(0);
const add = (): void => {
    counter.value++;
}
const subtract = () => {
    counter.value--;
}
</script>