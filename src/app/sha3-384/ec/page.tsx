import { Metadata } from "next"; 
import Component from "./Component";

export const metadata: Metadata = {
    title: 'SHA3-384 Encrypt - ToolsForDev.com.br',
    description: "Converta seu texto em um hash criptográfico de 384 bits usando o algoritmo SHA3-384. Mantenha seus dados seguros e protegidos de forma eficiente.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/sha3-384/ec"
    },
    openGraph: {
       "title": "SHA3-384 Encrypt - ToolsForDev.com.br",
       "description": "Converta seu texto em um hash criptográfico de 384 bits usando o algoritmo SHA3-384. Mantenha seus dados seguros e protegidos de forma eficiente.",
       url: 'https://toolsfordevs.com.br/sha3-384/ec',
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