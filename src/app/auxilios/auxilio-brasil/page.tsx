import { Metadata } from "next";
import Consulta from "./Consulta"

export const metadata: Metadata = {
     title: 'Consultar Auxílio Brasil - ToolsForDev.com.br',
     description: "Acesse nossa página de consulta do Auxílio Brasil e obtenha informações atualizadas sobre o programa. Verifique a elegibilidade, status do benefício e obtenha detalhes relevantes em um único lugar. Simplifique a busca por informações do Auxílio Brasil e tome decisões informadas. Aproveite nossos recursos para acessar rapidamente os dados que você precisa. Experimente agora e mantenha-se atualizado sobre o Auxílio Brasil de forma fácil e conveniente.",
     openGraph: {
        "title": "Consultar Auxílio Brasil - ToolsForDev.com.br",
        "description": "Acesse nossa página de consulta do Auxílio Brasil e obtenha informações atualizadas sobre o programa. Verifique a elegibilidade, status do benefício e obtenha detalhes relevantes em um único lugar. Simplifique a busca por informações do Auxílio Brasil e tome decisões informadas. Aproveite nossos recursos para acessar rapidamente os dados que você precisa. Experimente agora e mantenha-se atualizado sobre o Auxílio Brasil de forma fácil e conveniente.",
        images: [
            {
               url: "https://toolsfordevs.com.br/auxiliobr.png",
            }
        ]
     }
   };

  
export default function Page(){

    return(
        <>
            <Consulta h1={'Consultar Auxílio Brasil'}/>
        </>
    );
}