import Sha512 from "./sha512";
import { Metadata } from "next"; 

export const metadata: Metadata = {
    title: 'Gerador de Hash SHA512 para Texto - ToolsForDev.com.br',
    description: "Esta ferramenta online permite converter texto em um hash SHA512, que é um algoritmo de criptografia robusto e altamente seguro. Com a conversão para SHA512, você pode proteger senhas e informações confidenciais de maneira avançada. Simplifique o processo de geração de hashes SHA512 com esta ferramenta eficiente.",
    openGraph: {
       "title": "Gerador de Hash SHA512 para Texto - ToolsForDev.com.br",
       "description": "Esta ferramenta online permite converter texto em um hash SHA512, que é um algoritmo de criptografia robusto e altamente seguro. Com a conversão para SHA512, você pode proteger senhas e informações confidenciais de maneira avançada. Simplifique o processo de geração de hashes SHA512 com esta ferramenta eficiente.",
       url: 'https://toolsfordevs.com.br',
       images: [
           {
              url: "https://toolsfordevs.com.br/sha512.png",
           }
       ]

    }
};

export default function Page(){
    return(
        <Sha512/>
    )
}