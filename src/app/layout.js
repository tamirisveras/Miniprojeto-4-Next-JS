export const metadata = {
  title: 'INT-ADS',
  description: 'Informação e Noticial de ADS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
