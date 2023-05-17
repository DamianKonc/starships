import './globals.css'

export const metadata = {
  title: 'Starships',
  description: 'Star Wars Starships',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body >{children}</body>
    </html>
  )
}
