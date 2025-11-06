export const useCounter=(initialValue:number|0)=>{
    const count=ref<number>(initialValue);
    
    const increment=()=>{
        count.value++;
    }
    const decrement=()=>{
        count.value--;
    }
    const reset=()=>{
        count.value=initialValue;
    }
    return{
        count:readonly(count),
        increment,
        decrement,
        reset
    }
}