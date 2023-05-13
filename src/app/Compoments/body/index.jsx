import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../sidebar/Sidebar";
import './body.css'
export default function Body({children}) {
    return(
        
        <main className="main-root">
                <Sidebar />
                <div className="my-5 container-root">
                    { children }
                </div>
        </main>
        
    );
}