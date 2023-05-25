import Base64 from "./base64";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Codificador de Texto para Base64 - ToolsForDev.com.br',
    description: "Transforme seu texto em uma representação segura e compacta usando a codificação Base64. Com esta ferramenta, você pode converter texto em Base64, que é amplamente utilizado para transmitir e armazenar dados de forma eficiente. Garanta a integridade dos seus dados com esta ferramenta de conversão simples e eficaz.",
    openGraph: {
       "title": "Codificador de Texto para Base64 - ToolsForDev.com.br",
       "description": "Transforme seu texto em uma representação segura e compacta usando a codificação Base64. Com esta ferramenta, você pode converter texto em Base64, que é amplamente utilizado para transmitir e armazenar dados de forma eficiente. Garanta a integridade dos seus dados com esta ferramenta de conversão simples e eficaz.",
       url: 'https://toolsfordevs.com.br',
       images: [
           {
              url: "https://toolsfordevs.com.br/base64.png",
           }
       ]

    }
};

export default function Page(){
    return(
        <>
            <Base64 h1={'Codificador de texto para Base64'}/>
        </>
    )
}