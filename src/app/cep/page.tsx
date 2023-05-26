import CEP from "./cep"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Consultar CEP - ToolsForDev.com.br',
    description: "Consulte e valida números de CEP de todas as regiões do Brasil de forma rápida em simples.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/cep"
    },
    openGraph: {
        title: "Consultar CEP - ToolsForDev.com.br",
        description: "Consulte e valida números de CEP de todas as regiões do Brasil de forma rápida em simples.",
        url: 'https://toolsfordevs.com.br/cep',
        siteName: "Tools for dev",
        images: [
            {
               url: "https://toolsfordevs.com.br/localizacao.png",
            }
        ],
        type: "website"
    }
  };


export default function Page(){
    return(
        <>
            <CEP  h1={'Consultar CEP'}/>
        </>
    )
} 