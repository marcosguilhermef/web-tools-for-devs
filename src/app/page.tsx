import '@/app/home.css'
import DivOpt from './Compoments/DivOp/DivOp'

export default function Home() {
  const data = [
    { "name": "Base64","url_img": "/base64.png", "url": "/base64/ec", "desc": "Codificar um texto para Base64." },
    { "name": "Base64","url_img": "/base64.png", "url": "/base64/dc", "desc": "Decodificar um texto para Base64." },

    { "name": "URL","url_img": "/url.png", "url": "/base64/ec", "desc": "Converter texto para fomato URL." },
    { "name": "URL","url_img": "/url.png", "url": "/base64/dc", "desc": "Converter formato URL para texto." },
  
    { "name": "SHA256","url_img": "/sha256.png", "url": "/sha256/dc", "desc": "Condificar um texto para o formato sha256." },

    { "name": "SHA512","url_img": "/sha512.png", "url": "/sha512/dc", "desc": "Condificar um texto para o formato sha512." },

    { "name": "MD5","url_img": "/md5.png", "url": "/md5/dc", "desc": "Converter texto para o formato MD5." },

    { "name": "CPF","url_img": "/cpf.png", "url": "/vl/cpf", "desc": "Valide o número de algum CPF." },

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
