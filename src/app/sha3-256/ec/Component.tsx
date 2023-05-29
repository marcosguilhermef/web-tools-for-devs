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
            <Articles title='O que é SHA3-256?'>{'O SHA3-256 é outra variante do SHA-3 que produz um valor de hash de 256 bits (32 bytes). Assim como o SHA-256, o SHA3-256 é uma escolha robusta para proteger a integridade dos dados e é amplamente utilizado em várias aplicações criptográficas.'}</Articles>

        </div>
    );
}
