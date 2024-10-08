import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <div lang="en">
      <Header />
      <body className="bg-[#F7F5F4]">
        <Theme>
          {children}
        </Theme>
      </body>
    </div>
  )
}
