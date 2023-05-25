import React from "react";
import './articles.css'
export default function Index({children, title}: { children?: React.ReactNode, title: string }){
    return(
        <div className="article">
            <h3> { title }</h3>
            { children }
        </div>
    );
}