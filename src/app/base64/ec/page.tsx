import Base64 from "./base64";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Converter de base64 para Texto | Toos For Dev',
    description: "Ferramenta que permite converter Texto para base64.",
    openGraph: {
       "title": "Validador de CPF | Toos For Dev",
       "description": "Ferramenta que permite converter Texto para base64.",
    }
};

export default function Page(){
    return(
        <Base64/>
    )
}