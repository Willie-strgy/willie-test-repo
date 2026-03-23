// INTENTIONAL ISSUES: any types, inline styles, missing prop types, console.log
import React from 'react'
import { formatDate } from '@/utils/formatters'
import { calculateAge } from '@/utils/helpers'

interface UserCardProps {
  user: any
}

export const UserCard = ({ user }: UserCardProps) => {
  console.log('Rendering UserCard for', user.name)

  // INTENTIONAL: hardcoded API key (security issue)
  const API_KEY = 'sk-test-1234567890abcdef'

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px', borderRadius: '8px' }}>
      <h2 style={{ color: '#333', fontSize: '18px' }}>{user.name}</h2>
      <p style={{ color: '#666' }}>Email: {user.email}</p>
      <p>Joined: {formatDate(user.joinedAt)}</p>
      <p>Age: {calculateAge(user.birthDate)}</p>
      <p>Role: {user.role || 'unknown'}</p>
    </div>
  )
}

// INTENTIONAL: dead code — unused component
export const UserCardSkeleton = () => {
  return (
    <div style={{ border: '1px solid #eee', padding: '16px', margin: '8px' }}>
      <div style={{ width: '60%', height: '20px', background: '#eee' }} />
      <div style={{ width: '80%', height: '16px', background: '#eee', marginTop: '8px' }} />
    </div>
  )
}

// INTENTIONAL: dead code — commented out old implementation
// export const OldUserCard = ({ user }) => {
//   return (
//     <div className="user-card">
//       <span>{user.name}</span>
//       <span>{user.email}</span>
//     </div>
//   )
// }
