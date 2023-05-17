'use client'
import { Form, Button, InputGroup } from "react-bootstrap";
import '@/app/conversor.css'
import Fetch from "@/app/util/Fetch";
import React, { useState } from "react";
import Cep from "./type";
import "./cep.css"
export default function cep(){
    const [cep, setCep] = useState<string>();
    const [result, setResult] = useState<Cep |null >(null);
    const [ erro, setErro ] = useState<boolean | null >(null)
    const URL = '/api/cep'

    function configureCepValidation(e: any){
        const { value } = e.currentTarget
        setCep(value)
    }

    async function mageRequest(){
        const fetch = await new Fetch(`${URL}/${cep}`,{},Fetch.GET).doFetch();
        if(fetch.data !== undefined){
            setErro(true)
            return setResult(null);
        }
        setErro(false)
        return setResult(fetch);
    }

    return(
        <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <InputGroup.Text className="label-name-input">
                        CEP:
                    </InputGroup.Text>
                    <Form.Control 
                        type="number w-25" 
                        className="form-control-input" 
                        onChange={configureCepValidation}
                        maxLength={8}
                        isValid={ erro === false ? true : false}
                        isInvalid={ erro === true ? true : false }
                    />
                    <Form.Control.Feedback type="invalid">
                        CEP incorreto ou não existe.
                    </Form.Control.Feedback>

                    <Form.Control.Feedback type="valid">
                        CEP válido.
                    </Form.Control.Feedback>


                </Form.Group>

                <Button 
                    className="w-100 button-color" 
                    type="submit"
                    onClick={mageRequest}
                    >
                    Validar 
                </Button>

                <div hidden={!result} className="cep-resultato">
                    <div><span>cep: </span> { result?.cep }</div>   
                    <div><span>logradouro: </span> { result?.logradouro }</div> 
                    <div><span>complemento: </span> { result?.complemento }</div>   
                    <div><span>bairro: </span> { result?.bairro }</div> 
                    <div><span>localidade: </span> { result?.localidade }</div> 
                    <div><span>uf: </span> { result?.uf }</div> 
                    <div><span>ibge: </span> { result?.ibge }</div> 
                    <div><span>gia: </span> { result?.gia }</div>   
                    <div><span>ddd: </span> { result?.ddd }</div>   
                    <div><span>siafi: </span> { result?.siafi }</div>   
                </div>

        </div>
    );
}