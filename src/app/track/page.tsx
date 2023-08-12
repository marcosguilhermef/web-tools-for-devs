'use client'
import React,{ useState, useEffect } from "react";
import { GpsTracker } from "../tools/GpsTracker";
import { location } from '@/app/tools/Location'
import Fetch from "@/app/util/Fetch";

function Track() { 

    const [ position, setPosition ]  = useState<location | undefined>();
    const [ error, setError ] = useState< Error | undefined>();
    const URL = '/api/geo'

    async function getLocation(){
        let gps = new GpsTracker(setPosition);
        try{
            await gps.watching()
        }catch(e){
            let err = (e as Error) 
            setError(err)
        }
        
    }

    const Localizando = () => {
        return(
            <h1>Carregando</h1>
        )
    }

    const Rastreador = () => {
        if((error === undefined) && (position === undefined)){
            return(<Localizando/>)
        }

        if(error !== undefined){
            switch(error?.name){
                case 'GeolocationNotAvaible': 
                return (<h1>Geolocalização indisponível</h1>)  
                case 'GeoLocationPermissionDenied': 
                return (<h1>Ataulize a página, permita acesso a localização e ative o GPS para ver o conteúdo</h1>)    
                case 'GeoLocationPositionUnavaible': 
                return (<h1>Geolocalização indisponível</h1>)    
                case 'GeoLocationTimeOut': 
                return (<h1>Tempo esgotado</h1>)    
                case 'GeoLocationUnknowError': 
                return (<h1>Erro desconhecido</h1>)    

            }
        }

        if(position !== undefined){
            return(
                <>
                    <p>
                        { position.lat }
                    </p>
                    <p>
                        { position.lon }
                    </p>
                    <p>
                        { position.alt }
                    </p>
                </>
            )
        }

        return (<></>)
    }

    async function save(position : location | undefined){
        const fetch = await new Fetch(`${URL}`, position, Fetch.POST).doFetch();
    }

    useEffect( () => {
          if(position != undefined){
            let result = {
                rotulo: tag(),
                ...position
            }
            save(result)
            console.log(position)
          }
    }, [position?.alt, position?.lat, position?.lon])

    useEffect(() => {
        getLocation()
    },[])

    function tag(){
        if((localStorage.getItem('rotulo') === undefined) || (localStorage.getItem('rotulo') === null)){
            localStorage.setItem('rotulo', generateName())
        }
        return localStorage.getItem('rotulo');
    }

    function generateName(){
        var name : string = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for(let a = 0; a < 100; a++){
            name = name + (characters[Math.floor(Math.random() * 62)])
        }
        return name;
    }

    return (
        <>
            <Rastreador/>
        </>
    )
}
export default Track;