import Header from "@/app/Compoments/Layout/header";
import Foot from '@/app/Compoments/Layout/foot'
import Body from '@/app/Compoments/Layout/body'
export default function Layout({children, title = 'Tools For Devs'}: { children: React.ReactNode, title:string}) {
    return(
        <html lang="pt-BR">
            <head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9766084129238638" crossorigin="anonymous"></script>
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