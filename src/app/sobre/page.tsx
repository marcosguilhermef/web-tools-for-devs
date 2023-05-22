
import { Metadata } from 'next';
import Image from 'next/image';
export const metadata: Metadata = {
  title: 'Sobre',
};
function Sobre() { 
    return (
            <div>
                <p>
                  O toolsfordevs.com.br tem o objetivo de facilitar a vida de programadores e usuários em geral da intert através de ferramentas de fácil uso.
                </p>
                <p>
                  Sempre estaremos trabalhando para criar novas ferramentas que atendam as necessidades do usuário, que seja simples, prática e segura.
                </p>
                <p>
                  Caso queira ajudar financeiramente o projeto, aqui está a chave pix: f8c858bd-4322-473e-b751-f3819cb30845
                </p>
                <Image
                  src="/pix.jpeg"
                  width={250}
                  height={250}
                  alt="Chave pix"
                  style={{
                    margin: "0 auto",
                    display: "block"
                  }}
                />
            </div>
       
    )
}
export default Sobre;