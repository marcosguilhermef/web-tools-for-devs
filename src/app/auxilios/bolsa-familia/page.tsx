import { Metadata } from "next";
import Consulta from "./Consulta"

export const metadata: Metadata = {
     title: 'Consultar Bolsa Família - ToolsForDev.com.br',
     description: "Obtenha informações sobre o Bolsa Família de forma rápida e fácil com a ferramenta de consulta do ToolsforDevs. Verifique elegibilidade, valores e histórico do benefício. Acesse agora e simplifique sua busca por dados do Bolsa Família.",
     alternates: { 
        canonical:"https://toolsfordevs.com.br/auxilios/bolsa-familia"
    },
     openGraph: {
        "title": "Consultar Bolsa Família - ToolsForDev.com.br",
        "description": "Obtenha informações sobre o Bolsa Família de forma rápida e fácil com a ferramenta de consulta do ToolsforDevs. Verifique elegibilidade, valores e histórico do benefício. Acesse agora e simplifique sua busca por dados do Bolsa Família.",
        images: [
            {
               url: "https://toolsfordevs.com.br/bolsa_familia.png",
            }
        ]
     }
   };

  
export default function Page(){

    return(
        <>
            <Consulta h1={'Consultar Bolsa Família'}/>
        </>
    );
}