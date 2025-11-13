export default defineEventHandler(async(event)=>{
    const id = Number(event.context.params?.id)
    await new Promise((resolve)=>{
        setTimeout(resolve,250)
    })
    const users=[
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Carol Williams', email: 'carol@example.com' }
    ]
    const userIndex=users.findIndex(user=>user.id===id)
    return users[userIndex]
});