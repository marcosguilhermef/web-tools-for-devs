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
            <Articles title='O que é SHA3-224?'>{'O SHA3-224 é uma função de hash criptográfica baseada no algoritmo SHA-3 que produz um valor de hash de 224 bits (28 bytes). O SHA-3 foi selecionado em um concurso público de criptografia em 2012, e o SHA3-224 é uma de suas variantes. Ele oferece uma alternativa ao SHA-256 e SHA-224, com propriedades de segurança e desempenho aprimorados.'}</Articles>

        </div>
    );
}
