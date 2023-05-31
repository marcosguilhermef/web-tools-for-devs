'use client'
import '@/app/conversor.css'
import Conversor from "@/app/Compoments/Conversors/Conversors";
import Articles from '@/app/Compoments/Articles'
export default function Component({ h1 }: { h1?: string }) {
    return (
        <div>
            <Conversor
                h1="SHA-384 Encrypt"
                url="/api/sha384/ec"
                t1={'de Texto'}
                t2={'para SHA-384'}
            >
            </Conversor>
            <Articles title='O que é SHA-384?'>
                <p>
                    O SHA-384 é uma variante do SHA-512 que produz um valor de hash de 384 bits (48 bytes). Assim como o SHA-224 em relação ao SHA-256, o SHA-384 é uma opção menor quando um valor de hash mais curto é necessário em comparação com o SHA-512. O SHA-384 oferece um nível mais alto de segurança em relação ao SHA-256, mas com um tamanho de saída maior.
                </p>
            </Articles>
            <Articles title={"O que é faz o SHA-384 Encrypt (codificador SHA-384)?"}>
                <p>
                Um codificador SHA384, ou Encrypt SHA384, é um algoritmo de criptografia que converte uma entrada de dados em um hash de 384 bits. Ele oferece segurança e integridade aos dados. O SHA384 gera uma sequência única de caracteres que não pode ser revertida, permitindo a verificação de dados sem revelar informações sensíveis. É utilizado em diversas aplicações que requerem proteção e autenticação de dados, como armazenamento seguro de informações confidenciais, assinaturas digitais e autenticação de mensagens. O algoritmo SHA384 é reconhecido por sua robustez e capacidade de proteger dados sensíveis.
                </p>
            </Articles>
        </div>
    );
}
