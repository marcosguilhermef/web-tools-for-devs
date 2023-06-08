import { Metadata } from "next";
import Cnpj from "./Cnpj"

export const metadata: Metadata = {
     title: 'Gerador de CNPJ - ToolsForDev.com.br',
     description: "Gere números de CNPJ válidos instantaneamente com nosso prático gerador online. Obtenha CNPJs aleatórios para fins de teste, simulação e muito mais em segundos.",
     alternates: { 
        canonical: "https://toolsfordevs.com.br/cnpj/gn",
    },
     openGraph: {
        title: 'Gerador de CNPJ - ToolsForDev.com.br',
        description: "Gere números de CNPJ válidos instantaneamente com nosso prático gerador online. Obtenha CNPJs aleatórios para fins de teste, simulação e muito mais em segundos.",
        url: "https://toolsfordevs.com.br/cnpj/gn",
        siteName: "Tools for dev",
        images: [
            {
               url: "https://toolsfordevs.com.br/cpf.png",
            }
        ],
        type: "website"
     }
   };

  
export default function Page(){

    return(
        <>
            <Cnpj h1={'Gerador de CNPJ'}/>
        </>
    );
}