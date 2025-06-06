import { Metadata } from "next";
import Component from "./Component";
export const metadata: Metadata = {
    title: 'MD5 Encrypt - ToolsForDev.com.br',
    description: "Proteja suas informações convertendo texto em um hash MD5 único. Com esta ferramenta, você pode gerar um hash MD5 criptograficamente seguro para senhas, verificação de integridade de arquivos e outros fins. Simplifique o processo de geração de hashes MD5 e garanta a segurança dos seus dados.",
    alternates: { 
        canonical:"https://toolsfordevs.com.br/md5/ec"
    },
    openGraph: {
        title: "MD5 Encrypt - ToolsForDev.com.br",
        description: "Proteja suas informações convertendo texto em um hash MD5 único. Com esta ferramenta, você pode gerar um hash MD5 criptograficamente seguro para senhas, verificação de integridade de arquivos e outros fins. Simplifique o processo de geração de hashes MD5 e garanta a segurança dos seus dados.",
        url: 'https://toolsfordevs.com.br/md5/ec',
        siteName: "Tools for dev",
        images: [
            {
               url: "https://toolsfordevs.com.br/md5.png",
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