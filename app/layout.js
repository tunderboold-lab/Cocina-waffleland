export const metadata = {
  title: 'Cocina Waffleland',
  description: 'Sistema de solicitudes de cocina',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
