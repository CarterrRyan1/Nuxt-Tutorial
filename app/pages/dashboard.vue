<template>
    <div class="flex flex-col justify-center items-center min-h-screen">
        <h1 class="text-3xl underline mb-4">
            Protected Page
        </h1>
        <p class="max-w-md m-2 p-4 bg-gray-200 rounded-sm text-center">
            You have successfully accessed this protected page! This page is only accessible to authenticated users.
        </p>
        <button @click="logout" class="border border-blue-400 rounded p-2 m-2">Logout</button>
    </div>
</template>
<script setup lang="ts" >
definePageMeta({
  middleware: 'auth'
});
const logout=()=>{
    const state = useState("isAuthenticated");
    state.value = false;
    navigateTo('/login');
}
</script>