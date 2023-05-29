import { Metadata } from "next";
import Component from "./Component";
export const metadata: Metadata = {
    title: 'Ferramenta de Conversão de Texto para Formato URL - ToolsForDev.com.br',
    description: "Esta ferramenta online permite converter facilmente texto em um formato compatível com URLs. Com a conversão para o formato URL, você pode garantir que seu texto seja aceito corretamente em URLs, evitando erros e problemas de codificação. Facilite o processo de preparação de URLs com esta ferramenta eficiente.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/url/ec"
    },
    openGraph: {
       "title": "Ferramenta de Conversão de Texto para Formato URL - ToolsForDev.com.br",
       "description": "Esta ferramenta online permite converter facilmente texto em um formato compatível com URLs. Com a conversão para o formato URL, você pode garantir que seu texto seja aceito corretamente em URLs, evitando erros e problemas de codificação. Facilite o processo de preparação de URLs com esta ferramenta eficiente.",
       url: 'https://toolsfordevs.com.br/url/ec',
       images: [
           {
              url: "https://toolsfordevs.com.br/url.png",
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
    );
}