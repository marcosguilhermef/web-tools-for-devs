
import { Metadata } from 'next';
import Component from './Component';
export const metadata: Metadata = {
    title: 'Decodificador de Base64 para Texto - ToolsForDev.com.br',
    description: "Esta ferramenta online permite decodificar texto de formato Base64 de volta para o formato original. Com apenas alguns cliques, você pode reverter a codificação Base64 e obter o texto original. Simplifique o processo de decodificação e utilize facilmente dados codificados em Base64.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/base64/dc"
    },
    openGraph: {
       "title": "Decodificador de Base64 para Texto - ToolsForDev.com.br",
       "description": "Esta ferramenta online permite decodificar texto de formato Base64 de volta para o formato original. Com apenas alguns cliques, você pode reverter a codificação Base64 e obter o texto original. Simplifique o processo de decodificação e utilize facilmente dados codificados em Base64.",
       url: 'https://toolsfordevs.com.br/base64/dc',
       images: [
           {
              url: "https://toolsfordevs.com.br/base64.png",
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