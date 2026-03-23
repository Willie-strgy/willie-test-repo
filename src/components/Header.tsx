// INTENTIONAL ISSUES: unused imports, duplicated logic from UserCard
import React, { useState, useRef, useContext } from 'react'
import moment from 'moment'

interface HeaderProps {
  title: string
  subtitle?: string
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  // INTENTIONAL: unused state
  const [menuOpen, setMenuOpen] = useState(false)

  const currentYear = moment().format('YYYY')

  return (
    <header style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <h1 style={{ color: '#333', fontSize: '24px' }}>{title}</h1>
      {subtitle && <p style={{ color: '#666' }}>{subtitle}</p>}
      <span>© {currentYear}</span>
    </header>
  )
}
