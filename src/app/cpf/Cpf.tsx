'use client'
import { Form, Button, InputGroup } from "react-bootstrap";
import '@/app/conversor.css'
import Fetch from "@/app/util/Fetch";
import React, { useState } from "react";

export default function Cpf(){
    const [cpf, setCpf] = useState<string>();
    const [result, setResult] = useState<boolean | null>(null);
    const URL = '/api/cpf/vl'

    function configureCPFValidation(e: any){
        const { value } = e.currentTarget
        setCpf(value)
    }

    async function mageRequest(){
        const fetch = await new Fetch(`${URL}/${cpf}`,{},Fetch.GET).doFetch();
        setResult(fetch.data)
    }

    return(
        <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <InputGroup.Text className="label-name-input">
                        CPF:
                    </InputGroup.Text>
                    <Form.Control 
                        type="number w-25" 
                        className="form-control-input" 
                        onChange={configureCPFValidation}
                        onFocus={() => ( setResult(null) )}
                        maxLength={11}
                        isValid={!!result}
                        isInvalid={ result === null ? false : !result }
                    />
                    <Form.Control.Feedback type="invalid">
                        CPF incorreto ou não existe.
                    </Form.Control.Feedback>

                    <Form.Control.Feedback type="valid">
                        CPF válido.
                    </Form.Control.Feedback>


                </Form.Group>

                <Button 
                    className="w-100 button-color" 
                    type="submit"
                    onClick={mageRequest}
                    >
                    Validar {result}
                </Button>

        </div>
    );
}