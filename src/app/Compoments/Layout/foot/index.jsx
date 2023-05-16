import React from "react";
import '@/app/Compoments/Layout/foot/foot.css'
import Link from 'next/link';

export default function Foot(){
    return(
        <footer className="foot">
            <div className="foot-content">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/politicas">Políticas</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                    <li><Link href="/sobre">Sobre</Link></li>
                </ul>
            </div>
            <div className="foot-copy">
                <span>
                    © Copyright 2023 - Todos os direitos reservados.  
                </span>
            </div>
        </footer>
    );
}