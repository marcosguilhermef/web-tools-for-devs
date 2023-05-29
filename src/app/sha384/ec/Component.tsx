'use client'
import '@/app/conversor.css'
import Conversor from "@/app/Compoments/Conversors/Conversors";
import Articles from '@/app/Compoments/Articles'
export default function Component({ h1 }: { h1?: string }) {
    return (
        <div>
            <Conversor
                h1="SHA-384 Encrypt"
                url="/api/sha384/ec"
                t1={'de Texto'}
                t2={'para SHA-384'}
            >
            </Conversor>
            <Articles title='O que é SHA-384?'>{'O SHA-384 é uma variante do SHA-512 que produz um valor de hash de 384 bits (48 bytes). Assim como o SHA-224 em relação ao SHA-256, o SHA-384 é uma opção menor quando um valor de hash mais curto é necessário em comparação com o SHA-512. O SHA-384 oferece um nível mais alto de segurança em relação ao SHA-256, mas com um tamanho de saída maior.'}</Articles>
        </div>
    );
}
