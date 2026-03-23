// INTENTIONAL: incomplete types, some unused
export interface User {
  id: number
  name: string
  email: string
  role?: string
  birthDate?: string
  joinedAt?: string
  active?: boolean
}

// INTENTIONAL: unused type
export interface AdminUser extends User {
  permissions: string[]
  lastLogin: Date
}

// INTENTIONAL: overly permissive type
export type ApiResponse = {
  data: any
  status: any
  message?: any
}

// INTENTIONAL: duplicate of what could use User
export interface UserDTO {
  id: number
  name: string
  email: string
  role?: string
}
