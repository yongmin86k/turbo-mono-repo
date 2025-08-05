import { create } from "zustand"

interface AuthState {
  token: string | null
}

interface AuthActions {
  setToken: (token: AuthState["token"]) => void
}

export const useAuthStore = create<AuthState & AuthActions>()((set) => ({
  token: null,
  setToken: (token) => {
    if (token) {
      console.log("Token is generated:", token)
    } else {
      console.log("User logged out, token cleared")
    }
    set(() => ({ token }))
  },
}))
