import { Metadata } from "next";
import Cnpj from "./Cnpj"

export const metadata: Metadata = {
     title: 'Validador de cnpj - ToolsForDev.com.br',
     description: "Verifique a autenticidade de CNPJs com nossa ferramenta de validação. Garanta a integridade dos números de registro e evite problemas fiscais e comerciais.",
     alternates: { 
        canonical:"https://toolsfordevs.com.br/cpf"
    },
     openGraph: {
        "title": "Validar de CPF - ToolsForDev.com.br",
        "description": "Verifique a autenticidade de CNPJs com nossa ferramenta de validação. Garanta a integridade dos números de registro e evite problemas fiscais e comerciais.",
        url: "https://toolsfordevs.com.br/cnpj",
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
            <Cnpj h1={'Consultar CNPJ'}/>
        </>
    );
}