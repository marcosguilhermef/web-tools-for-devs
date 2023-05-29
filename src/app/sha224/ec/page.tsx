import Component from "./Component";
import { Metadata } from "next"; 

export const metadata: Metadata = {
    title: 'SHA-224 Encrypt - ToolsForDev.com.br',
    description: "Proteja seus dados com o hash SHA-224 de 224 bits. Converta seu texto em uma sequência criptografada para garantir a segurança.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/sha224/ec"
    },
    openGraph: {
       "title": "SHA-224 Encrypt - ToolsForDev.com.br",
       "description": "Proteja seus dados com o hash SHA-224 de 224 bits. Converta seu texto em uma sequência criptografada para garantir a segurança.",
       url: 'https://toolsfordevs.com.br/sha224/ec',
       images: [
           {
              url: "https://toolsfordevs.com.br/sha224.png",
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