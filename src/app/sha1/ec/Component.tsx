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
            <Articles title='O que é SHA-1?'>{'SHA-1 (Secure Hash Algorithm 1) é uma função de hash criptográfica que produz um valor de hash de 160 bits (20 bytes). Foi desenvolvido pela NSA (Agência de Segurança Nacional dos Estados Unidos) e publicado pelo NIST (Instituto Nacional de Padrões e Tecnologia) em 1995. Embora tenha sido amplamente utilizado no passado, o SHA-1 é considerado inseguro para aplicações críticas de segurança devido a vulnerabilidades conhecidas. Colisões (quando duas entradas diferentes produzem o mesmo valor de hash) podem ser encontradas com esforço computacional razoável. Portanto, não é mais recomendado para uso em algoritmos de assinatura digital ou autenticação.'}</Articles>
        </div>
    );
}
