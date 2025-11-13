export default defineEventHandler(async(event)=>{
    await new Promise((resolve)=>{
        setTimeout(resolve,1000)
    })
    return[
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Carol Williams', email: 'carol@example.com' }
    ]
})