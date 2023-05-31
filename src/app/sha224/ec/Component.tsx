'use client'
import '@/app/conversor.css'
import Articles from '@/app/Compoments/Articles'
import Conversor from "@/app/Compoments/Conversors/Conversors";
export default function Component({ h1 }: { h1?: string }) {

    return (
        <div>
            <Conversor
                h1="SHA-224 Encrypt"
                url="/api/sha-224/ec"
                t1={'de Texto'}
                t2={'para SHA224'}
            >

            </Conversor>
            <Articles title='O que é SHA-224?'>
                <p>
                    O SHA-224 é uma variante do SHA-256 que produz um valor de hash de 224 bits (28 bytes). Ele foi projetado para ser usado como uma alternativa menor ao SHA-256 em sistemas com restrições de recursos. O SHA-224 fornece um nível moderado de segurança e é uma boa escolha quando um valor de hash mais curto é necessário, mas o SHA-256 não é viável devido a limitações de desempenho ou armazenamento.
                </p>   
            </Articles>
            <Articles title={"O que é faz o SHA-224 Encrypt (codificador SHA224)?"}>
                <p>
                Um codificador SHA224, ou Encrypt SHA224, é um algoritmo de criptografia que converte uma entrada de dados em um hash de 224 bits. Ele é usado para garantir a integridade e autenticidade dos dados. O SHA224 gera uma sequência única de caracteres que não pode ser revertida, permitindo a verificação de dados sem expor informações sensíveis. É usado em aplicações que exigem proteção e autenticação de dados, como assinaturas digitais, autenticação de mensagens e armazenamento seguro de senhas. O algoritmo SHA224 é amplamente utilizado e considerado seguro para criptografia e integridade de dados.
                </p>
            </Articles>
        </div>
    );
}