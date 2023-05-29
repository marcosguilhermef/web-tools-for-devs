'use client'
import '@/app/conversor.css'
import Conversor from "@/app/Compoments/Conversors/Conversors";
export default function Component({ h1 }: { h1?: string }) {
    return (
        <div>
            <Conversor
                h1="Ferramenta de Conversão de Texto para Formato URL"
                url="/api/url/ec"
                t1={'de Texto'}
                t2={'para URL'}
            >
            </Conversor>
        </div>
    );
}
