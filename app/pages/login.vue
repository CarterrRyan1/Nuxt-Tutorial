<template>
    <div class="flex flex-col justify-center items-center min-h-screen">
        <h1 class="text-3xl underline mb-4">
            Login Page
        </h1>
        <div class="flex flex-col gap-4 p-6 border rounded-sm max-w-md w-full p-1">
            <div class="flex flex-col">
                <label class="mb-1 font-medium m-1 p-1">Username:</label>
                <input v-model="username" type="text" class="p-2 border border-gray-300 rounded-sm m-1 p-1" />
            </div>
            <div class="flex flex-col">
                <label class="mb-1 font-medium m-1 p-1">Password:</label>
                <input v-model="password" type="password" class="p-2 border border-gray-300 rounded-sm m-1 p-1" />
            </div>
            <button @click="login" class="rounded-sm bg-green-800 hover:bg-green-700 p-2 text-white m-2">Login</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const username = ref('');
const password = ref('');
const login=async():Promise<void>=>{
    const isAuthenticated = useState('isAuthenticated');
    // Simple mock authentication logic
    const response = await $fetch('/api/login', {
        method: 'POST',
        body: { username: username.value, password: password.value }
    });
    if (response.success) {
        isAuthenticated.value = true;
        navigateTo('/dashboard');
    } else {
        alert('Invalid credentials');
    }
}
</script>