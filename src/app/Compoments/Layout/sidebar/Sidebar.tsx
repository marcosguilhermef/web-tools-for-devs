'use client'
import React, { useEffect, useState } from "react";
import '@/app/Compoments/Layout/sidebar/sidebar.css'
import Item from "./item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
export default function Sidebar({props}: { props: any }) {

    const [show, setShow] = useState<boolean>(false)

    const Itens = [ 
        { url: "", name: "Codificadores", type: "categoria" },
        { url: "/url/ec", name: "De Texto para URL", type: "" },
        { url: "/url/dc", name: "De URL para Texto", type: "" },
        { url: "/base64/ec", name: "De Texto para Base64", type: "" },
        { url: "/base64/dc", name: "De Base64 para Texto", type: "" },
        { url: "", name: "Validadores", type: "categoria" },
        { url: "/cpf", name: "Validar CPF", type: "" },
        { url: "", name: "Encriptar", type: "categoria" },
        { url: "/md5/ec", name: "MD5", type: "" },
        { url: "/sha256/ec", name: "SHA256", type: "" },
        { url: "/sha512/ec", name: "SHA512", type: "" },
        { url: "", name: "Consultas", type: "categoria" },
        { url: "/cep", name: "Consultar CEP", type: "" },

    ]

    function showOptions(){
        setShow(!show)
    }

    useEffect( () => {
        function resize(){
            setShow(false)
        }
        window.addEventListener('resize', resize)
    } )

    return (
        <aside className="root-sidebar">
            <h4>
                Ferramentas
            </h4>
            
            <div className="sidebar-hamburger" hidden={show}>
                <FontAwesomeIcon 
                    size="1x" 
                    icon={faBars} 
                    onClick={showOptions} />
             </div>

            <div className="sidebar-close" hidden={!show}>
                <FontAwesomeIcon 
                    size="1x" 
                    icon={faClose} 
                    onClick={showOptions} />
            </div>

            <div className={'sidebar'}>                
                <ul className="list-sidebar">
                    {
                        Itens.map( (e) =>{
                            return( <Item props={e} key={e.name}/> )
                        })
                    }
                </ul>
            </div>

            <div className={'sidebar-responsive'} style={{ display: !show ? 'none' : 'block' }}>                
                <ul className="list-sidebar">
                    {
                        Itens.map( (e) =>{
                            return( <Item key={e.name} props={e}/> )
                        })
                    }
                </ul>
            </div>

        </aside>
    );
}