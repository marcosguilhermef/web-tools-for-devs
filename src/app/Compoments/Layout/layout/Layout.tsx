'use client'
import Header from "@/app/Compoments/Layout/header";
import Foot from '@/app/Compoments/Layout/foot'
import Body from '@/app/Compoments/Layout/body'
export default function Layout({children, title = 'Tools For Devs'}: { children: React.ReactNode, title:string}) {
    return(
        <html lang="pt-BR">
            <head>
                <title>{ title }</title>
            </head>
            <body>
            <Header />
                <Body>
                        { children }
                </Body>
            <Foot />
            </body>
        </html>
    );
}