import { Metadata } from "next"; 
import Component from "./Component";

export const metadata: Metadata = {
    title: 'SHA-384 Encrypt - ToolsForDev.com.br',
    description: "Garanta a segurança dos seus dados com o hash SHA-384 de 384 bits. Converta seu texto em uma sequência criptografada e mantenha-os protegidos.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/sha256/ec"
    },
    openGraph: {
       "title": "SHA-384 Encrypt - ToolsForDev.com.br",
       "description": "Garanta a segurança dos seus dados com o hash SHA-384 de 384 bits. Converta seu texto em uma sequência criptografada e mantenha-os protegidos.",
       url: 'https://toolsfordevs.com.br/sha256/ec',
       images: [
           {
              url: "https://toolsfordevs.com.br/sha256.png",
           }
       ],
       type: "website"

    }
};
export default function Page(){
    return(
        <>
            <Component/>
        </>
    )
}