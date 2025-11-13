<template>
    <div>
        <h1 class="text-3xl text-center m-2 p-2">Item Search:</h1>
        <input v-model="searchQuery" type="text" placeholder="search..."/>
    </div>
    <div>
        <button class="border rounded-sm m-2 p-1" @click="filter='asc'"> filter by asc</button>
        <button class="border rounded-sm m-2 p-1" @click="filter='desc'"> filter by desc</button>
    </div>
    <div>
        <div class="border m-2 rounded-sm" v-for="item in filteredItems":key=item.id>
            <h1>{{ item.name }}</h1>
            <p>{{ item.category }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref,computed} from 'vue'
interface Item{
    id:number;
    name:string;
    category:string;
}
const items=ref<Item[]>([
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Banana', category: 'Fruit' },
    { id: 3, name: 'Carrot', category: 'Vegetable' }
]);
const filter=ref<'asc'|'desc'>('asc');
const searchQuery=ref<string>('');
const filteredItems=computed(()=>{
    let result = items.value.filter(item=> item.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
    return result.sort((a,b)=>{
        if(filter.value==='asc'){
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
});
</script>