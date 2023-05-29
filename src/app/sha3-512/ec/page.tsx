import Hash from "./Component";
import { Metadata } from "next"; 

export const metadata: Metadata = {
    title: 'SHA3-512 Encrypt - ToolsForDev.com.br',
    description: "Garanta a máxima segurança convertendo seu texto em um hash de 512 bits com o algoritmo SHA3-512. Proteja seus dados com essa ferramenta criptográfica poderosa.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/sha256/ec"
    },
    openGraph: {
       "title": "SHA3-512 Encrypt - ToolsForDev.com.br",
       "description": "Garanta a máxima segurança convertendo seu texto em um hash de 512 bits com o algoritmo SHA3-512. Proteja seus dados com essa ferramenta criptográfica poderosa.",
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
            <Hash h1={"Gerador de Hash SHA256 para Texto"}/>
        </>
    )
}