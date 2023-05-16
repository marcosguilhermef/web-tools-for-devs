import Url from "./url";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Converter para Texto | Toos For Dev',
    description: "Ferramenta que permite converter de URL para o formato Texto.",
    openGraph: {
       "title": "Converter para URL | Toos For Dev",
       "description": "Ferramenta que permite converter de URL para o formato Texto.",
    }
};


export default function Page(){


    return(
        <>
            <Url/>
        </>
    );
}