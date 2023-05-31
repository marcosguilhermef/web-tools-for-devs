'use client'
import '@/app/conversor.css'
import Articles from '@/app/Compoments/Articles'
import Conversor from "@/app/Compoments/Conversors/Conversors";
export default function Component({ h1 }: { h1?: string }) {
    return (
        <div>
            <Conversor
                h1="SHA3-224 Encrypt"
                url="/api/sha3-224/ec"
                t1={'de Texto'}
                t2={'para SHA3-224'}
            >
            </Conversor>
            <Articles title='O que é SHA3-224?'>
                <p>
                    O SHA3-224 é uma função de hash criptográfica baseada no algoritmo SHA-3 que produz um valor de hash de 224 bits (28 bytes). O SHA-3 foi selecionado em um concurso público de criptografia em 2012, e o SHA3-224 é uma de suas variantes. Ele oferece uma alternativa ao SHA-256 e SHA-224, com propriedades de segurança e desempenho aprimorados.
                </p>
            </Articles>
            <Articles title={"O que é faz o SHA3-224 Encrypt (codificador SHA3-224)?"}>
                <p>
                    Um codificador SHA3-224, ou Encrypt SHA3-224, é um algoritmo de criptografia que converte uma entrada de dados em um hash de 224 bits. Ele oferece segurança e confidencialidade aos dados. O SHA3-224 gera uma sequência única de caracteres que não pode ser revertida, permitindo a verificação de integridade de dados sem revelar informações sensíveis. É usado em aplicações que exigem proteção e autenticação de dados, como assinaturas digitais e autenticação de mensagens. O algoritmo SHA3-224 é considerado seguro e resistente a ataques criptográficos.
                </p>
            </Articles>
        </div>
    );
}
