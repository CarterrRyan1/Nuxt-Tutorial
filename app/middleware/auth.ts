export default defineNuxtRouteMiddleware(async (to, from) => {
  const isAuthenticated = useState('isAuthenticated', () => false);
  
  if (!isAuthenticated.value && to.path !== '/login') {
    return navigateTo('/login');
  }
})