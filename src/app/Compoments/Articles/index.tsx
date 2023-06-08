import React from "react";
import './articles.css'
export default function Index({children, title}: { children?: React.ReactNode, title: string }){
    return(
        <div className="article" itemScope itemType="https://schema.org/Question">
            <h2 itemProp="name"> { title }</h2>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <div itemProp="text">{ children }</div>
            </div>
        </div>
    );
}