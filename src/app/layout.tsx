import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Willie Test App',
  description: 'Test application for Willie maintenance agent',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
