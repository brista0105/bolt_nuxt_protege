import { useAuthStore } from '~/stores/auth'
import { onMounted, ref } from 'vue'

export const useFirebaseAuth = () => {
  const { $auth } = useNuxtApp()
  const auth = useAuthStore()
  const router = useRouter()
  const initialized = ref(false)

  if (process.client && !initialized.value) {
    initialized.value = true
    
    // Initialize Firebase Auth state
    $auth?.onAuthStateChanged(async (user) => {
      if (user) {
        await auth.setUserData(user)
      } else {
        auth.clearUserData()
      }
    })
  }

  return {
    auth,
    isAuthenticated: computed(() => auth.isAuthenticated),
    user: computed(() => auth.user)
  }
}