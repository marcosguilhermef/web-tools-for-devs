'use client'
import React, { useEffect, useState } from "react";
import './style.css'
export default function MeuNavegador(){
    const [info, setInfor] = useState<{
        appCodeName: string,
        appName: string,
        appVersion: string,
        platform: string,
        language: string,
    }>(
        {
            'appCodeName': "",
            'appName': "",
            'appVersion': "",
            'platform': "",
            'language': "",
        } 
    )

    useEffect( () => {
        
        if(window?.navigator){
            setInfor( {
                'appCodeName': window.navigator.appCodeName,
                'appName': window.navigator.appName,
                'appVersion': window.navigator.appVersion,
                'platform': window.navigator.platform,
                'language': window.navigator.language,
            } )
        }
    })
    return(
        <div>   
            <h1 className="text-title">Meu navegador</h1>
            <div className="navegador my-5">
                <div><span>Navegador:</span> {info.appCodeName + info.appName} </div>
                <div><span>Versão do navegador:</span> {info.appVersion} </div>
                <div><span>Sistema operacional:</span> {info.platform} </div>
                <div><span>Linguagem:</span> {info.language} </div>
            </div>
        </div>
    )
}