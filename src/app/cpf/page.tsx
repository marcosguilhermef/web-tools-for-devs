import { Metadata } from "next";
import Cpf from "./Cpf"

export const metadata: Metadata = {
     title: 'Validador de CPF | Toos For Dev',
     description: "Ferramenta que permite verificar a validade de um número de CPF.",
     openGraph: {
        "title": "Validador de CPF | Toos For Dev",
        "description": "Ferramenta que permite verificar a validade de um número de CPF.",
     }
   };

  
export default function Page(){

    return(
        <>
            <Cpf/>
        </>
    );
}