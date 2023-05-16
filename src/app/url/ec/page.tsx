import Url from "./url";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Converter para URL | Toos For Dev',
    description: "Ferramenta que permite converter textos para o formato URL.",
    openGraph: {
       "title": "Converter para URL | Toos For Dev",
       "description": "Ferramenta que permite converter textos para o formato URL.",
    }
};

export default function Page(){

    return(
        <>
            <Url/>     
        </>
    );
}