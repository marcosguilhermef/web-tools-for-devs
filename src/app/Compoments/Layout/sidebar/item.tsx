import React, { EventHandler, useEffect } from "react";
import Link from 'next/link';
import onclick from "./type";
export default function Item({ props, close}: { props: any, close?: onclick | null }){
    
    const { name, url, type } : { name: string, url: string, type: string} = {...props}

    function closeSidebar(){
        console.log(close)
        if(close !== null && close !== undefined){
            close()
        }
    }


    if(type === "categoria"){
        return( 
            <li className="categoria-sidebar" >{ name }</li>
        )
    }else{
        return(
            <Link href={url || ""} onClick={closeSidebar}>
                <li className="item-sidebar">{ name }</li>
            </Link>
        )
    }

}