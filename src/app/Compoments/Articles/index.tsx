import React from "react";
import './articles.css'
export default function Index({children, title}: { children?: React.ReactNode, title: string }){
    return(
        <div className="article" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name"> { title }</h3>
            <div itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">{ children }</div>
            </div>
        </div>
    );
}