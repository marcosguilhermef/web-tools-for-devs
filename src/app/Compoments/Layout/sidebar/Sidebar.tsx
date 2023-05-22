'use client'
import React, { useEffect, useState } from "react";
import '@/app/Compoments/Layout/sidebar/sidebar.css'
import Item from "./item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import onclick from "./type";
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
        { url: "/auxilios/auxilio-brasil", name: "Consultar Auxílio Brasil", type: "" }

    ]

    function showOptions(){
        setShow(true)
    }
    
    const closeOptins : onclick  = () =>{
        setShow(false)
    }

    useEffect( () => {
        function resize(){
            closeOptins();
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
                    onClick={closeOptins} />
            </div>

            <div className={'sidebar'}>                
                <ul className="list-sidebar">
                    {
                        Itens.map( (e) =>{
                            return( <Item key={e.name} props={e}/> )
                        })
                    }
                </ul>
            </div>

            <div className={'sidebar-responsive'} style={{ display: !show ? 'none' : 'block' }}>                
                <ul className="list-sidebar">
                    {
                        Itens.map( (e) =>{
                            return( <Item props={e} key={e.name} close={closeOptins}/> )

                        })
                    }
                </ul>
            </div>

        </aside>
    );
}