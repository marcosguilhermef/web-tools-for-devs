'use client'
import '@/app/conversor.css'
import Articles from '@/app/Compoments/Articles'
import Conversor from "@/app/Compoments/Conversors/Conversors";
export default function Component({ h1 }: { h1?: string }) {

    return (
        <div>
            <Conversor
                h1="Codificador de texto para Base64"
                url="/api/base64/ec"
                t1={'de Texto'}
                t2={'para Base64'}
            >
                <Articles title={"O que é formato de texto BASE64?"}>
                    <p>{'Base64 é um sistema de codificação que converte dados binários em uma representação textual, composta por caracteres ASCII. Ele é amplamente utilizado para transmitir e armazenar dados binários de forma segura e eficiente em diferentes contextos, como transferência de arquivos na web, codificação de imagens em emails e armazenamento de dados em bancos de dados.'}</p>

                    <p>{'O Base64 opera em grupos de 3 bytes de dados de entrada e os converte em 4 caracteres ASCII. Essa codificação é necessária porque nem todos os caracteres ASCII podem ser facilmente transmitidos ou interpretados corretamente em todos os sistemas ou protocolos.'}</p>

                    <p>{'Ao utilizar o Base64, os dados binários são convertidos em uma sequência de caracteres que consiste em letras maiúsculas e minúsculas, dígitos numéricos e alguns caracteres especiais, como "+" e "/". O número de caracteres de saída pode variar dependendo do tamanho dos dados de entrada.'}</p>

                    <p>{'A principal vantagem do Base64 é a sua facilidade de implementação e compatibilidade ampla com diferentes plataformas e sistemas. Além disso, ele permite que os dados binários sejam representados em uma forma legível e segura, evitando problemas de transmissão ou armazenamento.'}</p>

                    <p>{'No entanto, é importante destacar que o Base64 não é uma forma de criptografia, pois a conversão pode ser facilmente revertida, e os dados originais podem ser recuperados. Portanto, ele é adequado para uso em casos em que o objetivo é representar dados binários de forma legível e não para proteção de dados confidenciais.'}</p>
                </Articles>

                <Articles title={"O que é faz o base64 encode (codificador)?"}>
                    <p>{'O base64 encoder tem a função de converter um texto para o formato base64'}</p>
                </Articles>
            </Conversor>
        </div>
    );
}