<template><!-- Pages in nuxt/vue dont use standard head and body tags, everything goes within a template tag-->
    <div v-if="!getStarted" class="flex flex-col justify-center items-center min-h-screen"> <!-- V-if="" is how you make a if statement in the html-->
        <h1 class=" text-3xl underline">Welcome to nuxt!</h1>
        <p class="max-w-100 m-2 p-2 bg-gray-200 rounded-sm">
            This is a simple Nuxt application to be used as a tutorial. This app uses tailwindcss so you can also explore using tailwind along side
            your development. To get started click the buttons below to explore some basic features.
        </p>
        <button @click="getStarted=true" class="rounded-sm bg-green-800 hover:bg-green-700 p-1 m-1 text-white">Get Started</button>
    </div>
    <div v-else class="flex flex-col items-center min-h-screen m-5">
        <h1 class=" text-2xl underline">Getting Started</h1>
        <p class="max-w-150 m-2 p-2 bg-gray-200 rounded-sm">
            This is where we will get started with our nuxt tutorial. You can explore the code in the
            <code class="bg-gray-700 rounded text-white p-1">server/api/hello.ts</code> file to see how to create a simple API endpoint in Nuxt 3. You can also explore the
            <code class="bg-gray-700 rounded text-white p-1">app/pages/index.vue</code> file to see how to create a simple page in Nuxt 3. One of the first tasks I want you to try is to type something in the textarea below
            and see how the message variable updates as you type. Then I want you to finish the existing  "movePage" function to navigate to a new page when called.
            This can be done by creating a new page in the pages directory and using the navigateTo function to navigate to that page. (You will also need a new button to call the method). 
        </p>
        <div>
            <textarea v-model="message" class="w-150 h-40 p-2 border border-gray-300 rounded-sm" placeholder="Type your message here..."></textarea>
            <!--v-model mounts the textarea to the message variable and updates the variable when the textarea value changes-->
            <p class="m-2">You typed: {{ message }}</p> <!--This is how you access a variable in html with vue-->
        </div>
        <div>
            <button @click="testApi" class="rounded-sm bg-green-800 hover:bg-green-700 p-1 m-1 text-white">Test API</button>
            <button @click="movePage" class="rounded-sm bg-blue-800 hover:bg-blue-700 p-1 m-1 text-white">Go to About Page</button>
        </div>
        <div>
            <counter/>
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref,onMounted} from 'vue';
const getStarted=ref<boolean>(false);
const message =ref<string>(''); // define a reactive variable to hold a message. To access the value use "message.value".
//NOTE: .value is only needed when accessing the variable in script, in the template you can just use "message"

const testApi=async():Promise<void>=>{
    const response=await fetch('/api/hello'); // make a GET request to the /api/hello endpoint
    const data=await response.json();
    console.log(data);
}
const movePage=()=>{
    navigateTo('/about');
}
</script>