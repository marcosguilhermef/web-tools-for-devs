import Link from 'next/link';
import onclick from "./type";
import { usePathname } from 'next/navigation';

export default function Item({ props, close}: { props: any, close?: onclick | null }){
    
    const { name, url, type } : { name: string, url: string, type: string} = {...props}
    const router = usePathname();

    function closeSidebar(){
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
            <li className={router == url ? "item-sidebar item-sidebar-active" : "item-sidebar"}>
                <Link href={url || ""}  onClick={closeSidebar}>
                    { name }
                </Link>
            </li>
        )
    }

}