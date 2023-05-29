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
            <Articles title='O que é SHA3-384?'>{'O SHA3-384 é uma variante do SHA-3 que produz um valor de hash de 384 bits (48 bytes). Com um tamanho de saída maior, o SHA3-384 oferece um nível mais alto de segurança em comparação com o SHA3-256.'}</Articles>
        </div>
    );
}
