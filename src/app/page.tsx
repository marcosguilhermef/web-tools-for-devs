import '@/app/home.css'
import DivOpt from './Compoments/DivOp/DivOp'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ferramentas Online para Desenvolvedores - ToolsForDevs.com.br',
  description: "Descubra uma coleção de ferramentas versáteis para uso geral ou desenvolvedores. Converta texto para Base64, URLs ou aplique algoritmos de criptografia como MD5, SHA256, SHA512, e muito mais. Simplifique suas tarefas com nossas práticas e eficientes ferramentas online. Otimize seu fluxo de trabalho e alcance resultados excepcionais. Acesse agora e aproveite as funcionalidades do nosso site de ferramentas para facilitar suas atividades diárias ou projetos de desenvolvimento. Experimente hoje e simplifique suas tarefas com eficácia e praticidade.",
  alternates: { 
    canonical:"https://toolsfordevs.com.br"
},
  openGraph: {
      title: 'Ferramentas Online para Desenvolvedores - ToolsForDevs.com.br',
      description: "Descubra uma coleção de ferramentas versáteis para uso geral ou desenvolvedores. Converta texto para Base64, URLs ou aplique algoritmos de criptografia como MD5, SHA256, SHA512, e muito mais. Simplifique suas tarefas com nossas práticas e eficientes ferramentas online. Otimize seu fluxo de trabalho e alcance resultados excepcionais. Acesse agora e aproveite as funcionalidades do nosso site de ferramentas para facilitar suas atividades diárias ou projetos de desenvolvimento. Experimente hoje e simplifique suas tarefas com eficácia e praticidade.",
      url: 'https://toolsfordevs.com.br',
      siteName: "Tools for dev",
      images: [
          {
             url: "https://toolsfordevs.com.br/logo.png",
          }
      ],
      type: "website",
  }
};


export default function Home() {
  const data = [
    { "name": "Base64","url_img": "/base64.png", "url": "/base64/ec", "desc": "Codificar um texto para Base64." },
    { "name": "Base64","url_img": "/base64.png", "url": "/base64/dc", "desc": "Decodificar um texto para Base64." },
    { "name": "URL","url_img": "/url.png", "url": "/base64/ec", "desc": "Converter texto para fomato URL." },
    { "name": "URL","url_img": "/url.png", "url": "/base64/dc", "desc": "Converter formato URL para texto." },
    { "name": "SHA256","url_img": "/sha256.png", "url": "/sha256/ec", "desc": "Condificar um texto para o formato sha256." },
    { "name": "SHA512","url_img": "/sha512.png", "url": "/sha512/ec", "desc": "Condificar um texto para o formato sha512." },
    { "name": "MD5","url_img": "/md5.png", "url": "/md5/ec", "desc": "Converter texto para o formato MD5." },
    { "name": "CPF","url_img": "/cpf.png", "url": "/cpf", "desc": "Valide o número de algum CPF." },
    { "name": "CEP","url_img": "/localizacao.png", "url": "/cep", "desc": "Consulte e valide números de CEP de todo o Brasil." },
    { "name": "Auxílio Brasil","url_img": "/auxiliobr.png", "url": "/auxilios/auxilio-brasil", "desc": "Consulte parcelas do auxílio brasil pagas de qualquer nis ou cpf." },
    { "name": "Bolsa Família","url_img": "/bolsa_familia.png", "url": "/auxilios/bolsa-familia", "desc": "Consulte parcelas do bolsa família pagas de qualquer nis ou cpf." },
    { "name": "Meu Ip","url_img": "/ip.png", "url": "/meu-ip", "desc": "Use essa ferramenta para descobrir o seu número de ip." },

  ]

  return (
    <div className="home">
        {
          data.map( (e,i,a) => {
            return(
              <DivOpt
                name={e?.name}
                url={e?.url}
                url_img={e?.url_img}
                desc={e?.desc}
                key={i}
              />
            )
          })
        }
    </div>
  )
}
