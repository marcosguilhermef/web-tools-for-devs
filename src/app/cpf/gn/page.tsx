import { Metadata } from "next";
import Cpf from "./Cpf"

export const metadata: Metadata = {
     title: 'Gerador de CPF - ToolsForDev.com.br',
     description: "Gedarador de CPFs válidos para desenvolvedores. Os números gerados servem apenas para realização de testes de validação.",
     alternates: { 
        canonical:"https://toolsfordevs.com.br/cpf/gn"
    },
     openGraph: {
        "title": "Gerador de CPF - ToolsForDev.com.br",
        description: "Gedarador de CPFs válidos para desenvolvedores. Os números gerados servem apenas para realização de testes de validação.",
        url: "https://toolsfordevs.com.br/cpf/gn",
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
            <Cpf h1={'Gerador de CPF'}/>
        </>
    );
}