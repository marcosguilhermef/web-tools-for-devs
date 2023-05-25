'use client'
import { Form, Button, InputGroup } from "react-bootstrap";
import '@/app/conversor.css'
import Fetch from "@/app/util/Fetch";
import React, { useState } from "react";
import Articles from '@/app/Compoments/Articles'

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

                <Articles title={"O que é o CPF (cadastro de pessoa física)?"}>
                    <p>O CPF (Cadastro de Pessoa Física) é um documento fundamental para os cidadãos brasileiros. Composto por onze dígitos, ele é emitido pela Receita Federal e serve como uma identificação única para cada pessoa. O CPF é utilizado em uma ampla gama de situações, como abertura de contas bancárias, contratação de serviços, emissão de notas fiscais, entre outros. Além disso, o CPF é necessário para a regularização fiscal e tributária, garantindo que os indivíduos estejam em conformidade com suas obrigações legais. Ao fornecer o CPF, é importante manter a confidencialidade desses dados, pois eles estão associados a informações pessoais e financeiras.</p>
                </Articles>

                <Articles title={"O que é faz o validador de CPF?"}>
                    <p>O validador de CPF tem a função de verificar a validade de um CPF.</p>
                </Articles>

        </div>
    );
}