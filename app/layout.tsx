import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'
import ActiveStatus from './components/ActiveStatus'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InstaChat',
  description: 'Instant Chatting app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus/>
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
