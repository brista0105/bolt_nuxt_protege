import { defineStore } from 'pinia'
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut as firebaseSignOut,
  type User as FirebaseUser
} from 'firebase/auth'

interface User {
  id: string
  email: string
  name: string
  tier: 'guest' | 'premium' | 'employer'
  photoURL?: string
}

interface AuthState {
  user: User | null
  token: string | null
  loading: boolean
}

interface SignUpData {
  name: string
  email: string
  password: string
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    loading: false
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    currentUser: (state) => state.user
  },

  actions: {
    async signIn(email: string, password: string) {
      try {
        this.loading = true
        const { $auth } = useNuxtApp()
        const userCredential = await signInWithEmailAndPassword($auth, email, password)
        const { user: firebaseUser } = userCredential

        await this.setUserData(firebaseUser)
      } catch (error: any) {
        console.error('Sign in error:', error)
        throw new Error(error.message)
      } finally {
        this.loading = false
      }
    },

    async signUp(userData: SignUpData) {
      try {
        this.loading = true
        const { $auth } = useNuxtApp()
        const userCredential = await createUserWithEmailAndPassword(
          $auth,
          userData.email,
          userData.password
        )
        const { user: firebaseUser } = userCredential

        await this.setUserData(firebaseUser)
      } catch (error: any) {
        console.error('Sign up error:', error)
        throw new Error(error.message)
      } finally {
        this.loading = false
      }
    },

    async signInWithGoogle() {
      try {
        this.loading = true
        const { $auth } = useNuxtApp()
        const provider = new GoogleAuthProvider()
        const userCredential = await signInWithPopup($auth, provider)
        const { user: firebaseUser } = userCredential

        await this.setUserData(firebaseUser)
      } catch (error: any) {
        console.error('Google sign in error:', error)
        throw new Error(error.message)
      } finally {
        this.loading = false
      }
    },

    async signInWithGithub() {
      try {
        this.loading = true
        const { $auth } = useNuxtApp()
        const provider = new GithubAuthProvider()
        const userCredential = await signInWithPopup($auth, provider)
        const { user: firebaseUser } = userCredential

        await this.setUserData(firebaseUser)
      } catch (error: any) {
        console.error('GitHub sign in error:', error)
        throw new Error(error.message)
      } finally {
        this.loading = false
      }
    },

    async signOut() {
      try {
        const { $auth } = useNuxtApp()
        await firebaseSignOut($auth)
        this.clearUserData()
      } catch (error: any) {
        console.error('Sign out error:', error)
        throw new Error(error.message)
      }
    },

    async setUserData(firebaseUser: FirebaseUser) {
      const token = await firebaseUser.getIdToken()
      this.token = token
      localStorage.setItem('auth_token', token)

      this.user = {
        id: firebaseUser.uid,
        email: firebaseUser.email!,
        name: firebaseUser.displayName || firebaseUser.email!.split('@')[0],
        tier: 'guest',
        photoURL: firebaseUser.photoURL || undefined
      }
    },

    clearUserData() {
      this.user = null
      this.token = null
      localStorage.removeItem('auth_token')
    },

    async initAuth() {
      const { $auth } = useNuxtApp()
      
      return new Promise<void>((resolve) => {
        const unsubscribe = $auth.onAuthStateChanged(async (firebaseUser) => {
          if (firebaseUser) {
            await this.setUserData(firebaseUser)
          } else {
            this.clearUserData()
          }
          unsubscribe()
          resolve()
        })
      })
    }
  }
})