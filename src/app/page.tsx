// INTENTIONAL ISSUES: unused imports, console.log, any type, TODO
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { UserCard } from '@/components/UserCard'
import { formatDate } from '@/utils/formatters'
import { helpers } from '@/utils/helpers'
import lodash from 'lodash'
import moment from 'moment'

// TODO: refactor this whole page (added 2024-01-15)
// TODO: add proper error handling (added 2023-06-20)

export default function Home() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  console.log('Home page rendered', users)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      try {
        const response = await fetch('/api/users')
        const data = await response.json()
        console.log('Fetched users:', data)
        setUsers(data)
      } catch (err) {
        console.error('Failed to fetch users', err)
        setError(err)
      }
      setLoading(false)
    }
    fetchUsers()
  }, [])

  // INTENTIONAL: unused variable
  const currentDate = moment().format('YYYY-MM-DD')

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading users</div>

  return (
    <main>
      <h1>Willie Test App</h1>
      <div>
        {users.map((user: any, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </main>
  )
}
