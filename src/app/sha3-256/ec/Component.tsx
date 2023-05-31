'use client'
import '@/app/conversor.css'
import Articles from '@/app/Compoments/Articles'
import Conversor from "@/app/Compoments/Conversors/Conversors";
export default function Component({ h1 }: { h1?: string }) {
    return (
        <div>
            <Conversor
                h1="SHA3-256 Encrypt"
                url="/api/sha3-256/ec"
                t1={'de Texto'}
                t2={'para SHA3-256'}
            >
            </Conversor>
            <Articles title='O que é SHA3-256?'>
                <p>
                    O SHA3-256 é outra variante do SHA-3 que produz um valor de hash de 256 bits (32 bytes). Assim como o SHA-256, o SHA3-256 é uma escolha robusta para proteger a integridade dos dados e é amplamente utilizado em várias aplicações criptográficas.
                </p>    
            </Articles>
            <Articles title={"O que é faz o SHA3-256 Encrypt (codificador SHA3-256)?"}>
                <p>
                    Um codificador SHA3-256, ou Encrypt SHA3-256, é um algoritmo de criptografia que converte uma entrada de dados em um hash de 256 bits. Ele garante a confidencialidade e segurança dos dados. O SHA3-256 gera uma sequência única de caracteres que não pode ser revertida, permitindo a verificação de integridade dos dados sem revelar informações sensíveis. É usado em diversas aplicações que exigem proteção e autenticação de dados, como assinaturas digitais, autenticação de mensagens e armazenamento seguro de senhas. O algoritmo SHA3-256 é considerado seguro e resistente a ataques criptográficos.
                </p>
            </Articles>

        </div>
    );
}
