export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useFirebaseAuth()
  
  if (!isAuthenticated.value && to.path !== '/auth/signin' && to.path !== '/auth/signup') {
    return navigateTo('/auth/signin')
  }
  
  if (isAuthenticated.value && (to.path === '/auth/signin' || to.path === '/auth/signup')) {
    return navigateTo('/dashboard')
  }
})