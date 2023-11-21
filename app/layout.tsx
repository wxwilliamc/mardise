import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MarDise',
  description: 'Created By William Chong',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(`relative font-sans antialiased`, inter.className)}>
        {/* set a min high to ensure footer always remain at bottom */}
        <main className='relative flex flex-col min-h-screen'>
          <Navbar />
          {/* Take out much space as available */}
          <div className='flex-grow flex-1'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
