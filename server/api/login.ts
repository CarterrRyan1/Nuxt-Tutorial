export default defineEventHandler(async(event)=>{
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    const body = await readBody(event);
    const { username, password } = body;
    
    // Simple authentication logic (for demonstration purposes)
    if (username === 'admin' && password === 'password') {
        return { success: true, message: 'Login successful' };
    } else {
        return { success: false, message: 'Invalid credentials' };
    }
})