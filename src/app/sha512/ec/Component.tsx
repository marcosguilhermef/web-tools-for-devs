'use client'
import '@/app/conversor.css'
import Conversor from "@/app/Compoments/Conversors/Conversors";
import Articles from '@/app/Compoments/Articles'

export default function Component({ h1 }: { h1?: string }) {
    return (
        <div>
            <Conversor
                h1="SHA-512 Encrypt"
                url="/api/sha512/ec"
                t1={'de Texto'}
                t2={'para SHA-512'}
            >
            </Conversor>
            <Articles title='O que é SHA-512?'>
                <p>
                    O SHA-512 é uma função de hash criptográfica que produz um valor de hash de 512 bits (64 bytes). Também faz parte da família SHA-2 e oferece um nível mais alto de segurança em relação ao SHA-256. O SHA-512 é usado em aplicações que requerem um alto nível de segurança e integridade dos dados, como criptografia de senhas, certificados digitais e algoritmos de assinatura digital.
                </p>
            </Articles>
            <Articles title={"O que é faz o SHA-512 Encrypt (codificador SHA-512)?"}>
                <p>
                    Um codificador SHA512, ou Encrypt SHA512, é um algoritmo de criptografia que converte uma entrada de dados em um hash de 512 bits. Ele oferece segurança e confidencialidade aos dados. O SHA512 gera uma sequência única de caracteres que não pode ser revertida, permitindo a verificação de dados sem expor informações sensíveis. É usado em aplicações que exigem proteção e autenticação de dados críticos, como armazenamento seguro de informações confidenciais, autenticação de transações e assinaturas digitais. O algoritmo SHA512 é amplamente confiável e capaz de proteger informações confidenciais de forma eficaz.
                </p>
            </Articles>

        </div>
    );
}
