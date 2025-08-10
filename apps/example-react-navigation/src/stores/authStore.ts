import { create, StateCreator } from "zustand"

interface AuthState {
  token: string | null
}

interface AuthActions {
  setToken: (token: AuthState["token"]) => void
}

export type AuthStore = AuthState & AuthActions

export const authStoreCreator: StateCreator<AuthStore> = (set) => ({
  token: null,
  setToken: (token) => {
    if (token) {
      console.log("Token is generated:", token)
    } else {
      console.log("User logged out, token cleared")
    }
    set(() => ({ token }))
  },
})

export const useAuthStore = create<AuthStore>()(authStoreCreator)
