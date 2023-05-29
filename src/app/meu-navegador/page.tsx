import { Metadata } from "next"; 
import Component from './Component'
export const metadata: Metadata = {
    title: 'Meu navegador- ToolsForDev.com.br',
    description: "Descubra o navegador que você está usando com facilidade! Nossa página identifica seu navegador automaticamente e fornece informações relevantes para a melhor experiência de navegação. Experimente agora mesmo e aproveite ao máximo sua visita online.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/meu-navegador"
    },
    openGraph: {
       "title": "Meu navegador - ToolsForDev.com.br",
       "description": "Descubra o navegador que você está usando com facilidade! Nossa página identifica seu navegador automaticamente e fornece informações relevantes para a melhor experiência de navegação. Experimente agora mesmo e aproveite ao máximo sua visita online.",
       url: 'https://toolsfordevs.com.br/meu-navegador',
       images: [
           {
              url: "https://toolsfordevs.com.br/ip.png",
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