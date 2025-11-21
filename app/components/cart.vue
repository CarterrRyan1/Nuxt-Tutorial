<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Shopping Cart</h2>
        <ul>
            <li v-for="item in cartItems" :key="item.id" class="mb-2">
                {{ item.name }} - Quantity: {{ item.quantity }}
            </li>
        </ul>
        <p v-if="cartItems.length === 0">Your cart is empty.</p>
    </div>
    <div>
        <h2>Add an item:</h2>
        <button @click="store.addItem({ id:1, name: 'sampleItem' })" class="bg-blue-500 text-white px-4 p-2 rounded block m-1">
            Add Sample Item
        </button>
        <button @click="store.addItem({ id:2, name: 'sampleItem2' })" class="bg-blue-500 text-white px-4 p-2 rounded">
            Add Sample Item
        </button>
        <button @click="store.clearCart()" class="bg-red-500 text-white px-4 p-2 rounded">Clear Cart</button>
    </div>
</template>
<script setup lang="ts">
const store = useCartStore(); 
 const cartItems=computed(()=>store.items);
</script>