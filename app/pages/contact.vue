<template>
    <div class="flex flex-col border border-solid border-black p-5 m-5 rounded-sm min-h-screen items-center">
        <h1 class="text-xl">Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
        <form class="flex flex-col items-center" @submit.prevent>
            <label>Name:</label>
            <input class="border border-solid border-black rounded p-1" @input="validateName" v-model="formData.name" type="text" placeholder="John Doe" />
            <p class="text-xs text-red-500 border border-solid border-red-500 rounded-sm p-1 m-1" v-if="errors.name">{{ errors.name }}</p>
            <label>Email:</label>
            <input class="border border-solid border-black rounded p-1" @input="validateEmail" v-model="formData.email" type="email" placeholder="john.doe@example.com" />
            <p class="text-xs text-red-500 border border-solid border-red-500 rounded-sm p-1 m-1" v-if="errors.email">{{ errors.email }}</p>
            <label>Message:</label>
            <textarea class="w-100 border border-solid border-black rounded p-1" @input="validateMessage" v-model="formData.message" placeholder="Your message here..."></textarea>
            <p class="text-xs text-red-500 border border-solid border-red-500 rounded-sm p-1 m-1" v-if="errors.message">{{ errors.message }}</p>
            <button class="bg-blue-500 hover:bg-blue-400 cursor-pointer p-2 m-2 rounded text-white disabled:bg-gray-400 disabled:cursor-not-allowed" :disabled="!isFormValid" @click="sendMessage" type="submit">Send</button>
        </form>
    </div>
</template>
<script setup lang="ts">
const formData = ref({
  name: '',
  email: '',
  message: ''
});

const errors = ref({
  name: '',
  email: '',
  message: ''
});

const validateName = () => {
  if (!formData.value.name) {
    errors.value.name = 'Name is required';
  } else if (formData.value.name.length < 2) {
    errors.value.name = 'Name must be at least 2 characters';
  } else {
    errors.value.name = '';
  }
};
const validateEmail=()=>{
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!formData.value.email){
        errors.value.email="Email is required";
    }else if(!emailPattern.test(formData.value.email)){
        errors.value.email="Invalid email format";
    }else{
        errors.value.email="";
    }
}
const validateMessage=()=>{
    if(!formData.value.message){
        errors.value.message="Message is Required";
    }else if(formData.value.message.length<10){
        errors.value.message="Message must be at least 10 characters";
    }else{
        errors.value.message="";
    }
}
const isFormValid=computed(()=>{
    return !errors.value.name &&!errors.value.email&&!errors.value.message
    &&formData.value.name&&formData.value.email&&formData.value.message;
})
const sendMessage=()=>{
    if(isFormValid.value){
        alert(`Thank you ${formData.value.name}, for your message`)

    }
}
</script>