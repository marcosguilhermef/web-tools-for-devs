'use client'
import '@/app/conversor.css'
import Articles from '@/app/Compoments/Articles'
import Conversor from "@/app/Compoments/Conversors/Conversors";
export default function Component({ h1 }: { h1?: string }) {
    return (
        <div>
            <Conversor
                h1="SHA3-512 Encrypt"
                url="/api/sha3-512/ec"
                t1={'de Texto'}
                t2={'para SHA3-512'}
            >
            </Conversor>
            <Articles title='O que é SHA-512?'>{'O SHA3-512 é a variante do SHA-3 que produz um valor de hash de 512 bits (64 bytes). Assim como o SHA-512, o SHA3-512 é usado em aplicações que exigem um alto nível de segurança e integridade dos dados, mas com as melhorias e propriedades de segurança oferecidas pelo algoritmo SHA-3.'}</Articles>

        </div>
    );
}
