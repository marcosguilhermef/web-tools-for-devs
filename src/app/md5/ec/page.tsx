import MD5 from "./md5"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Converter para MD5 | Toos For Dev',
    description: "Ferramenta que permite converter textos para o formato MD5.",
    openGraph: {
       "title": "Converter para MD5 | Toos For Dev",
       "description": "Ferramenta que permite converter textos para o formato MD5.",
    }
  };


export default function Page(){
    return(
        <>
            <MD5/>
        </>
    )
} 