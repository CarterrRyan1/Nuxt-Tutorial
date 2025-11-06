<template>
  <div class="flex flex-col items-center min-h-screen m-5">
    <h1 class="text-2xl underline">About Page</h1>
    <p>This is the about page!</p>
    <NuxtLink to="/" class="text-blue-500 hover:underline">
      Back to Home
    </NuxtLink>
    <UserCard name="John Doe" :age="30" email="johndoe@example.com"/>
  </div>
</template>
<script setup lang="ts">
import UserCard from '~/components/userCard.vue';


</script>