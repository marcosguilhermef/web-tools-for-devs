import Layout from './Compoments/Layout/layout'
import './app.scss'
export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <head>
      </head>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
