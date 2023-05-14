import React from "react";
import '@/app/Compoments/Layout/foot/foot.css'
import { Col, Row } from "react-bootstrap";
export default function Foot(){
    return(
        <footer className="foot">
            <div className="foot-content">
                <ul>
                    <li><a href="/#">Políticas</a></li>
                    <li><a href="/#">FAQ</a></li>
                    <li><a href="/#">Sobre</a></li>
                </ul>
            </div>
            <div className="foot-copy">
                <span>
                    © Copyrigth 2023 - Todos os direitos reservados.  
                </span>
            </div>
        </footer>
    );
}