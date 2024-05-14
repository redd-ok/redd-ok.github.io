import { Roboto_Mono } from 'next/font/google'
import "./global.css"
import Site from './page'

const robot_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'redd\'s portfolio',
  description: 'i pgoram',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={robot_mono.className}>
      <body className='bg-zinc-900'>{Site()}</body>
    </html>
  )
}
