// INTENTIONAL ISSUES: duplicate of database.ts logic, any types, no validation
import axios from 'axios'

// INTENTIONAL: hardcoded URL
const API_BASE = 'https://api.example.com/v1'

// INTENTIONAL: duplicate fetching logic
export async function fetchUsers(): Promise<any[]> {
  try {
    const response = await axios.get(`${API_BASE}/users`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch users:', error)
    return []
  }
}

export async function fetchUserById(id: string): Promise<any> {
  try {
    const response = await axios.get(`${API_BASE}/users/${id}`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch user:', error)
    return null
  }
}

// INTENTIONAL: no input validation
export async function createUser(userData: any): Promise<any> {
  const response = await axios.post(`${API_BASE}/users`, userData)
  return response.data
}

// INTENTIONAL: unused function
export async function deleteAllUsers(): Promise<void> {
  await axios.delete(`${API_BASE}/users`)
}
