import { Metadata } from "next";
import Cpf from "./Cpf"

export const metadata: Metadata = {
     title: 'Validador de CPF - ToolsForDev.com.br',
     description: "Ferramenta que permite verificar a validade de um número de CPF.",
     alternates: { 
        canonical:"https://toolsfordevs.com.br/cpf"
    },
     openGraph: {
        "title": "Validador de CPF - ToolsForDev.com.br",
        "description": "Ferramenta que permite verificar a validade de um número de CPF.",
     }
   };

  
export default function Page(){

    return(
        <>
            <Cpf h1={'Consultar CPF'}/>
        </>
    );
}