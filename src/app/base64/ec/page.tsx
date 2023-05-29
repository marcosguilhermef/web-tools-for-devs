import { Metadata } from "next";
import Component from "./Component";
export const metadata: Metadata = {
    title: 'Codificador de Texto para Base64 - ToolsForDev.com.br',
    description: "Transforme seu texto em uma representação segura e compacta usando a codificação Base64. Com esta ferramenta, você pode converter texto em Base64, que é amplamente utilizado para transmitir e armazenar dados de forma eficiente. Garanta a integridade dos seus dados com esta ferramenta de conversão simples e eficaz.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/base64/ec"
    },
    openGraph: {
       "title": "Codificador de Texto para Base64 - ToolsForDev.com.br",
       "description": "Transforme seu texto em uma representação segura e compacta usando a codificação Base64. Com esta ferramenta, você pode converter texto em Base64, que é amplamente utilizado para transmitir e armazenar dados de forma eficiente. Garanta a integridade dos seus dados com esta ferramenta de conversão simples e eficaz.",
       url: 'https://toolsfordevs.com.br/base64/ec',
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