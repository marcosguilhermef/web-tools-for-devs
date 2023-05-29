import Hash from "./Component";
import { Metadata } from "next"; 

export const metadata: Metadata = {
    title: 'SHA3-256 Encrypt - ToolsForDev.com.br',
    description: "Proteja seus dados convertendo-os em um hash de 256 bits com o algoritmo SHA3-256. Garanta a segurança e integridade dos seus dados com facilidade.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/sha256/ec"
    },
    openGraph: {
       "title": "SHA3-256 Encrypt - ToolsForDev.com.br",
       "description": "Proteja seus dados convertendo-os em um hash de 256 bits com o algoritmo SHA3-256. Garanta a segurança e integridade dos seus dados com facilidade.",
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