import Component from "./Component";
import Hash from "./Component";
import { Metadata } from "next"; 

export const metadata: Metadata = {
    title: 'SHA3-224 Encrypt- ToolsForDev.com.br',
    description: "Transforme seu texto em um hash de 224 bits com o algoritmo SHA3-224. Mantenha a segurança dos dados intacta com essa poderosa ferramenta criptográfica.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/sha3-224/ec",
    },
    openGraph: {
       "title": "SHA3-224 Encrypt - ToolsForDev.com.br",
       "description": "Transforme seu texto em um hash de 224 bits com o algoritmo SHA3-224. Mantenha a segurança dos dados intacta com essa poderosa ferramenta criptográfica.",
       url: 'https://toolsfordevs.com.br/sha3-224/ec',
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