<template>
    <div v-if="loading" class="h-screen flex flex-row items-center justify-center">
       <div>
        <span>Loading</span><svg class="inline ml-2 size-5 animate-spin" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        </div>
    </div>
    <div v-else-if="!loading && users.length>0">
        <div v-for="user in users" :key="user.id" class="border border-solid rounded-sm p-2 m-2">
            <h2 class="text-lg font-bold">{{ user.name }}</h2>
            <p class="text-sm">{{ user.email }}</p>
        </div>
    </div>
    <div v-else>
        <h1 class="text-red-500">Error: {{ error }}</h1>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
const loading=ref<boolean>(true);
const error=ref<string|null>(null);
interface User{
    id:number;
    name:string;
    email:string;
}
const users=ref<User[]>([]);
onMounted(async()=>{
    try{
        const response=await $fetch<User[]>('/api/users');
        if(response){
            users.value=response;
            loading.value=false;
        }else{
            error.value="No users found";
            loading.value=false;
            users.value=[] as User[];
        }
    }catch(err:any){
        error.value=err.message||"An error occurred while fetching users";
        loading.value=false;
        users.value=[] as User[];
    }
})
</script>