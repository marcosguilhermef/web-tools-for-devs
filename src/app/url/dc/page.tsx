import { Metadata } from "next";
import Component from "./Component";
export const metadata: Metadata = {
    title: 'Decodificador de Texto de Formato URL - ToolsForDev.com.br',
    description: "Com esta prática ferramenta online, você pode converter facilmente texto que está no formato URL de volta para o formato normal. Ao reverter a codificação URL, você pode obter o texto original e utilizá-lo de forma adequada. Simplifique o processo de decodificação de URLs com esta ferramenta confiável.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/url/dc"
    },
    openGraph: {
       "title": "Decodificador de Texto de Formato URL - ToolsForDev.com.br",
       "description": "Com esta prática ferramenta online, você pode converter facilmente texto que está no formato URL de volta para o formato normal. Ao reverter a codificação URL, você pode obter o texto original e utilizá-lo de forma adequada. Simplifique o processo de decodificação de URLs com esta ferramenta confiável.",
       url: 'https://toolsfordevs.com.br/url/dc',
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