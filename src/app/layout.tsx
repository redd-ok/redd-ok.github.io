import { Roboto_Mono } from 'next/font/google'
import "./global.css"

const robot_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Portfolio',
  description: 'xd',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={robot_mono.className}>
      <body>{children}</body>
    </html>
  )
}
