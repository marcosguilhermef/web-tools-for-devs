import Layout from '@/app/Compoments/Layout/layout/Layout';
import '@/app/app.scss'
export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <Layout >
      {children}
    </Layout>
  
  )
  
}
