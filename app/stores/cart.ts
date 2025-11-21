export const useCartStore = defineStore('cart', () => {
  const items = ref<Array<{ id: number; name: string; quantity: number }>>([]);
  const addItem = (item: { id: number; name: string }) => {
    const existing = items.value.find(i => i.id === item.id);
    if (existing) {
      existing.quantity++;
    } else {
      items.value.push({ ...item, quantity: 1 });
    }
  };
  
  const removeItem = (id: number) => {
    const index = items.value.findIndex(i => i.id === id);
    if (index > -1) items.value.splice(index, 1);
  };
  const clearCart =()=>{
    items.value = [];
  }
  
  const totalItems = computed(() => 
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  );
  
  return { items, addItem, removeItem, clearCart,totalItems };
},
{
  persist:true
}
);