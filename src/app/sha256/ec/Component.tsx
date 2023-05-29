'use client'
import '@/app/conversor.css'
import Conversor from "@/app/Compoments/Conversors/Conversors";
import Articles from '@/app/Compoments/Articles'
export default function Component({ h1 }: { h1?: string }) {
    return (
        <div>
            <Conversor
                h1="SHA-256 Encrypt"
                url="/api/sha256/ec"
                t1={'de Texto'}
                t2={'para SHA-256'}
            >
            </Conversor>
            <Articles title='O que é SHA-256?'>{'O SHA-256 é uma função de hash criptográfica amplamente utilizada que produz um valor de hash de 256 bits (32 bytes). Faz parte da família SHA-2 e é considerado seguro para a maioria das aplicações. O SHA-256 é amplamente utilizado em criptografia, assinaturas digitais, autenticação e verificação de integridade de dados. Até o momento, não foram encontradas colisões eficientes para o SHA-256, o que o torna uma escolha confiável para garantir a integridade dos dados.'}</Articles>
        </div>
    );
}
