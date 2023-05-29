import { Metadata } from "next"; 
import Component from "./Component";
export const metadata: Metadata = {
    title: 'SHA-512 Encrypt - ToolsForDev.com.br',
    description: "Converta seu texto em um hash de 512 bits altamente seguro com o SHA-512. Proteja a integridade dos seus dados com essa ferramenta confiável.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/sha512/ec"
    },
    openGraph: {
       "title": "SHA-512 Encrypt - ToolsForDev.com.br",
       "description": "Converta seu texto em um hash de 512 bits altamente seguro com o SHA-512. Proteja a integridade dos seus dados com essa ferramenta confiável.",
       url: 'https://toolsfordevs.com.br/sha512/ec',
       images: [
           {
              url: "https://toolsfordevs.com.br/sha512.png",
           }
       ],
       type: "website"

    }
};

export default function Page(){
    return(
        <Component/>
    )
}