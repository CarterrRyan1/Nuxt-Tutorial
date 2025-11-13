<template class="h-screen flex flex-col items-center justify-center">
    <h1 class="text-3xl text-center m-2 p-2">User Details:</h1>
    <div v-if="user" class="text-center border border-solid border-black m-1 p-2 rounded-sm">
        <h1>Name: {{ user.name }}</h1>
        <h2> email: {{ user.email }}</h2>
    </div>
</template>
<script setup lang="ts">
const route = useRoute();
const id=route.params.id;
interface User{
    id:number;
    name:string;
    email:string;
}
const{data:user}=await useFetch<User>(`/api/users/${id}`);
</script>