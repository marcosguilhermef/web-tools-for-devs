import MD5 from "./md5"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Gerador de Hash MD5 para Texto - ToolsForDev.com.br',
    description: "Proteja suas informações convertendo texto em um hash MD5 único. Com esta ferramenta, você pode gerar um hash MD5 criptograficamente seguro para senhas, verificação de integridade de arquivos e outros fins. Simplifique o processo de geração de hashes MD5 e garanta a segurança dos seus dados.",
    openGraph: {
        title: "Gerador de Hash MD5 para Texto - ToolsForDev.com.br",
        description: "Proteja suas informações convertendo texto em um hash MD5 único. Com esta ferramenta, você pode gerar um hash MD5 criptograficamente seguro para senhas, verificação de integridade de arquivos e outros fins. Simplifique o processo de geração de hashes MD5 e garanta a segurança dos seus dados.",
        url: 'https://toolsfordevs.com.br',
        siteName: "Tools for dev",
        images: [
            {
               url: "https://toolsfordevs.com.br/md5.png",
            }
        ]
    }
  };


export default function Page(){
    return(
        <>
            <MD5/>
        </>
    )
} 