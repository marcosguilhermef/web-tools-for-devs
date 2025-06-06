import { Metadata } from "next"; 
import Component from "./Component";

export const metadata: Metadata = {
    title: 'SHA-256 Encrypt - ToolsForDev.com.br',
    description: " Converta seu texto em um hash criptográfico seguro de 256 bits com o algoritmo SHA-256. Mantenha seus dados protegidos e íntegros.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/sha256/ec"
    },
    openGraph: {
       "title": "SHA-256 Encrypt - ToolsForDev.com.br",
       "description": " Converta seu texto em um hash criptográfico seguro de 256 bits com o algoritmo SHA-256. Mantenha seus dados protegidos e íntegros.",
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