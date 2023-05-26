import Sha256 from "./sha256";
import { Metadata } from "next"; 

export const metadata: Metadata = {
    title: 'Gerador de Hash SHA256 para Texto - ToolsForDev.com.br',
    description: "Aumente a segurança das suas informações com esta ferramenta online de conversão de texto para SHA256. O SHA256 é um algoritmo de criptografia amplamente utilizado para proteção de dados sensíveis. Com apenas alguns cliques, você pode gerar hashes SHA256 confiáveis e reforçar a segurança dos seus dados.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/sha256/ec"
    },
    openGraph: {
       "title": "Gerador de Hash SHA256 para Texto - ToolsForDev.com.br",
       "description": "Aumente a segurança das suas informações com esta ferramenta online de conversão de texto para SHA256. O SHA256 é um algoritmo de criptografia amplamente utilizado para proteção de dados sensíveis. Com apenas alguns cliques, você pode gerar hashes SHA256 confiáveis e reforçar a segurança dos seus dados.",
       url: 'https://toolsfordevs.com.br/sha256/ec',
       images: [
           {
              url: "https://toolsfordevs.com.br/sha256.png",
           }
       ],
       type: "website"

    }
};
export default function Page(){
    return(
        <>
            <Sha256 h1={"Gerador de Hash SHA256 para Texto"}/>
        </>
    )
}