export default defineEventHandler(async(event)=>{
    console.log('Hello endpoint was called')
    return { message: 'Hello, Nuxt 3!' }
})