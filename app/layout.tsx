import './globals.css'

export const metadata = {
  title: 'verover',
  description: 'verover personal website?!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
