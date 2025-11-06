<template>
        <div class="border border-solid border-black p-2 m-2 rounded-sm">
            <h1>Counter Component</h1>
            <p>{{ count || 0 }}</p>
            <div>
                <button @click="increment" class="rounded-sm bg-green-800 hover:bg-green-700 p-1 m-1 text-white">Add</button>
                <button @click="decrement" class="rounded-sm bg-red-800 hover:bg-red-700 p-1 m-1 text-white">Subtract</button>
                <button @click="reset" class="rounded-sm bg-gray-800 hover:bg-gray-700 p-1 m-1 text-white">Reset</button>
            </div>
        </div>
</template>
<script setup lang="ts">
import { useCounter } from '../composables/useCounter';
const {count,increment,decrement,reset}=useCounter(10);
</script>