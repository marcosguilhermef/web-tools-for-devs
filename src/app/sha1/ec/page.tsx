import { Metadata } from "next"; 
import Component from "./Component";

export const metadata: Metadata = {
    title: 'SHA1 Encrypt - ToolsForDev.com.br',
    description: "Converta seu texto em hash usando o algoritmo SHA-1 de 160 bits. Proteja a integridade dos dados de forma rápida e confiável.",
    alternates: { 
        canonical: "https://toolsfordevs.com.br/sha1/ec"
    },
    openGraph: {
       "title": "SHA1 Encrypt - ToolsForDev.com.br",
       "description": "Converta seu texto em hash usando o algoritmo SHA-1 de 160 bits. Proteja a integridade dos dados de forma rápida e confiável.",
       url: 'https://toolsfordevs.com.br/sha1/ec',
       images: [
           {
              url: "https://toolsfordevs.com.br/LOGO.png",
           }
       ],
       type: "website"

    }
};
export default function Page(){
    return(
        <>
            <Component />
        </>
    )
}