import React from "react";
import './sidebar.css'
import Link from 'next/link';
import ToggleButton from 'react-bootstrap/ToggleButton'

export default function Sidebar({props}: { props: any }) {

    return (
        <aside className="root-sidebar">
            <h4 className="sidebar-opcoes" style={{ textAlign: "center" }}>
                Ferramentas
            </h4>
            <div className="sidebar">                
                <ul className="list-sidebar">
                    <li className="categoria-sidebar">Codificadores</li>
                    <Link href="/url/ec">
                        <li className="item-sidebar">De Texto para URL</li>
                    </Link>
                    <Link href="/base64/ec">
                        <li className="item-sidebar">De Texto para Base64</li>
                    </Link>

                    <li className="categoria-sidebar">Decodificadores</li>
                    <Link href="/url/dc">
                        <li className="item-sidebar">De URL para Texto</li>
                    </Link>
                    <Link href="/base64/dc">
                        <li className="item-sidebar">De Base64 para Texto</li>
                    </Link>

                    <li className="categoria-sidebar">Validadores</li>
                    <Link href="/cpf">
                        <li className="item-sidebar">Validar CPF</li>
                    </Link>

                    <li className="categoria-sidebar">Encriptar</li>
                    <Link href="/md5/ec">
                        <li className="item-sidebar">MD5</li></Link>
                    <Link href="/sha256/ec">
                        <li className="item-sidebar">SHA256</li>
                    </Link>
                    <Link href="/sha512/ec">
                        <li className="item-sidebar">SHA512</li>
                    </Link>

                </ul>
            </div>
        </aside>
    );
}