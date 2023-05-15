import React, { useEffect } from "react";
import Link from 'next/link';

export default function Item({ props }: { props: any }){
    const { name, url, type } : { name: string, url: string, type: string } = {...props}

    if(type === "categoria"){
        return(
            <li className="categoria-sidebar">{ name }</li>
        )
    }else{
        return(
            <Link href={url || ""}>
                <li className="item-sidebar">{ name }</li>
            </Link>
        )
    }

}