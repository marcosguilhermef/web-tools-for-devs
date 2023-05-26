import MeuIp from "./MeuIp"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Meu ip - ToolsForDev.com.br',
    description: "Descubra o seu número de IP com facilidade. Nosso site oferece uma página simples e intuitiva que permite que você consulte seu endereço IP em apenas alguns cliques. Saiba mais sobre sua conexão e verifique seu IP agora mesmo.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/meu-ip"
    },
    openGraph: {
        title: "Meu ip - ToolsForDev.com.br",
        description: "Descubra o seu número de IP com facilidade. Nosso site oferece uma página simples e intuitiva que permite que você consulte seu endereço IP em apenas alguns cliques. Saiba mais sobre sua conexão e verifique seu IP agora mesmo.",
        url: 'https://toolsfordevs.com.br/meu-ip',
        siteName: "Tools for dev",
        images: [
            {
               url: "https://toolsfordevs.com.br/ip.png",
            }
        ]
    }
  };


export default function Page(){
    return(
        <>
            <MeuIp h1={'Detectar meu Ip'}/>
        </>
    )
} 