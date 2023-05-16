import Header from "@/app/Compoments/Layout/header";
import Foot from '@/app/Compoments/Layout/foot'
import Body from '@/app/Compoments/Layout/body'
export default function Layout({children, title = 'Tools For Devs'}: { children: React.ReactNode, title:string}) {
    return(
        <html lang="pt-BR">
            <head>
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9766084129238638" crossOrigin="anonymous"/>
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