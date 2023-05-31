'use client'
import '@/app/conversor.css'
import Articles from '@/app/Compoments/Articles'
import Conversor from "@/app/Compoments/Conversors/Conversors";
export default function Component({ h1 }: { h1?: string }) {
    return (
        <div>
            <Conversor
                h1="SHA1 Encrypt"
                url="/api/sha1/ec"
                t1={'de Texto'}
                t2={'para SHA-1'}
            >
            </Conversor>
            <Articles title='O que é SHA-1?'>
                <p>
                    SHA-1 (Secure Hash Algorithm 1) é uma função de hash criptográfica que produz um valor de hash de 160 bits (20 bytes). Foi desenvolvido pela NSA (Agência de Segurança Nacional dos Estados Unidos) e publicado pelo NIST (Instituto Nacional de Padrões e Tecnologia) em 1995. Embora tenha sido amplamente utilizado no passado, o SHA-1 é considerado inseguro para aplicações críticas de segurança devido a vulnerabilidades conhecidas. Colisões (quando duas entradas diferentes produzem o mesmo valor de hash) podem ser encontradas com esforço computacional razoável. Portanto, não é mais recomendado para uso em algoritmos de assinatura digital ou autenticação.
                </p>
            </Articles>
            <Articles title={"O que é faz o MD5 Encrypt (codificador MD5)?"}>
                <p>
                    Um codificador SHA1, ou Encrypt SHA1, é um algoritmo de criptografia que converte uma entrada de dados em um hash de 160 bits. É usado para garantir a integridade de dados, autenticação e verificação de identidade. O SHA1 transforma os dados em uma sequência única de caracteres, difícil de ser revertida, o que permite a comparação de dados sem revelar informações sensíveis. É amplamente utilizado em aplicações de segurança, como assinaturas digitais e autenticação de mensagens.
                </p>
            </Articles>

        </div>
    );
}
