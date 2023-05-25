import CEP from "./cep"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Consultar CEP - ToolsForDev.com.br',
    description: "Consulte e valida números de CEP de todas as regiões do Brasil de forma rápida em simples.",
    openGraph: {
        title: "Consultar CEP - ToolsForDev.com.br",
        description: "Consulte e valida números de CEP de todas as regiões do Brasil de forma rápida em simples.",
        url: 'https://toolsfordevs.com.br',
        siteName: "Tools for dev",
        images: [
            {
               url: "https://toolsfordevs.com.br/localizacao.png",
            }
        ]
    }
  };


export default function Page(){
    return(
        <>
            <CEP  h1={'Consultar CEP'}/>
        </>
    )
} 