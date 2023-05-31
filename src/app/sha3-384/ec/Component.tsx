'use client'
import '@/app/conversor.css'
import Conversor from "@/app/Compoments/Conversors/Conversors";
import Articles from '@/app/Compoments/Articles'
export default function Component({ h1 }: { h1?: string }) {
    return (
        <div>
            <Conversor
                h1="SHA3-384 Encrypt"
                url="/api/sha3-384/ec"
                t1={'de Texto'}
                t2={'para SHA3-384'}
            >
            </Conversor>
            <Articles title='O que é SHA3-384?'>
                <p>
                    O SHA3-384 é uma variante do SHA-3 que produz um valor de hash de 384 bits (48 bytes). Com um tamanho de saída maior, o SHA3-384 oferece um nível mais alto de segurança em comparação com o SHA3-256.
                </p>
            </Articles>
            <Articles title={"O que é faz o SHA3-384 Encrypt (codificador SHA3-384)?"}>
                <p>
                    Um codificador SHA3-384, ou Encrypt SHA3-384, é um algoritmo de criptografia que converte uma entrada de dados em um hash de 384 bits. Ele oferece confidencialidade e segurança aos dados. O SHA3-384 gera uma sequência única de caracteres que não pode ser revertida, permitindo a verificação de integridade dos dados sem revelar informações sensíveis. É usado em aplicações que requerem proteção e autenticação de dados sensíveis, como armazenamento seguro de senhas, autenticação de mensagens e assinaturas digitais. O algoritmo SHA3-384 é considerado seguro e resistente a ataques criptográficos.
                </p>
            </Articles>

        </div>
    );
}
