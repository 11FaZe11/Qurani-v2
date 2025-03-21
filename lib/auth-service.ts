// This is a simple mock auth service
// In a real application, you would connect this to a backend

interface User {
  id: string
  name: string
  email: string
}

interface LoginCredentials {
  email: string
  password: string
  remember?: boolean
}

interface SignupCredentials {
  firstName: string
  lastName: string
  email: string
  password: string
}

// Mock user data
const MOCK_USER: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
}

export const authService = {
  // Login function
  login: async (credentials: LoginCredentials): Promise<User> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you would validate credentials with your backend
    if (credentials.email && credentials.password) {
      // Store auth state in localStorage if remember is true
      if (credentials.remember) {
        localStorage.setItem("auth_user", JSON.stringify(MOCK_USER))
      } else {
        sessionStorage.setItem("auth_user", JSON.stringify(MOCK_USER))
      }

      return MOCK_USER
    }

    throw new Error("Invalid credentials")
  },

  // Signup function
  signup: async (credentials: SignupCredentials): Promise<User> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you would register the user with your backend
    if (credentials.email && credentials.password) {
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        name: `${credentials.firstName} ${credentials.lastName}`,
        email: credentials.email,
      }

      // Store auth state
      sessionStorage.setItem("auth_user", JSON.stringify(user))

      return user
    }

    throw new Error("Invalid signup information")
  },

  // Logout function
  logout: async (): Promise<void> => {
    // Clear auth state
    localStorage.removeItem("auth_user")
    sessionStorage.removeItem("auth_user")
  },

  // Get current user
  getCurrentUser: (): User | null => {
    if (typeof window === "undefined") return null

    const userStr = localStorage.getItem("auth_user") || sessionStorage.getItem("auth_user")
    if (userStr) {
      try {
        return JSON.parse(userStr)
      } catch (e) {
        return null
      }
    }

    return null
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!authService.getCurrentUser()
  },
}

