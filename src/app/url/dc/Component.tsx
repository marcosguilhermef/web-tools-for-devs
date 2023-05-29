'use client'
import '@/app/conversor.css'
import Conversor from "@/app/Compoments/Conversors/Conversors";
export default function Component({ h1 }: { h1?: string }) {
    return (
        <div>
            <Conversor
                h1="Decodificador de Texto de Formato URL"
                url="/api/url/dc"
                t1={'de URL'}
                t2={'para texto'}
            >
            </Conversor>
        </div>
    );
}
