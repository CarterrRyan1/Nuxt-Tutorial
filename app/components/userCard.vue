<template>
    <div class="border border-solid border-black rounded p-2 m-2">
        <h1 class="text-lg">Testing Props:</h1>
        <p>This is where we will display the user information.</p>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <p>Email: {{ email }}</p>
    </div>
</template>
<script setup lang="ts">
interface Props{
    name:string,
    age:number,
    email:string
}
defineProps<Props>();
</script>