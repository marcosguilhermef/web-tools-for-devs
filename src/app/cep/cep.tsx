'use client'
import { Form, Button, InputGroup } from "react-bootstrap";
import '@/app/conversor.css'
import Fetch from "@/app/util/Fetch";
import React, { useState } from "react";
import Cep from "./type";
import Articles from '@/app/Compoments/Articles'

export default function CEP({ h1 }: { h1?: string }) {
    const [cep, setCep] = useState<string>();
    const [result, setResult] = useState<Cep | null>(null);
    const [erro, setErro] = useState<boolean | null>(null)
    const URL = '/api/cep'

    function configureCepValidation(e: any) {
        const { value } = e.currentTarget
        setCep(value)
    }

    async function mageRequest() {
        const fetch = await new Fetch(`${URL}/${cep}`, {}, Fetch.GET).doFetch();
        if (fetch.data !== undefined) {
            setErro(true)
            return setResult(null);
        }
        setErro(false)
        return setResult(fetch);
    }

    return (
        <div>
            <h1 className="text-title">{h1}</h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup.Text className="label-name-input">
                    CEP:
                </InputGroup.Text>
                <Form.Control
                    type="number w-25"
                    className="form-control-input"
                    onChange={configureCepValidation}
                    maxLength={8}
                    isValid={erro === false ? true : false}
                    isInvalid={erro === true ? true : false}
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

            <div hidden={!result} className="resultato-query">
                <div><span>cep: </span> {result?.cep}</div>
                <div><span>logradouro: </span> {result?.logradouro}</div>
                <div><span>complemento: </span> {result?.complemento}</div>
                <div><span>bairro: </span> {result?.bairro}</div>
                <div><span>localidade: </span> {result?.localidade}</div>
                <div><span>uf: </span> {result?.uf}</div>
                <div><span>ibge: </span> {result?.ibge}</div>
                <div><span>gia: </span> {result?.gia}</div>
                <div><span>ddd: </span> {result?.ddd}</div>
                <div><span>siafi: </span> {result?.siafi}</div>
            </div>


            <Articles title={"O que é o CEP (código de endereçamento fiscal)?"}>
                <p>O CEP (Código de Endereçamento Postal) é um sistema de codificação numérica utilizado no Brasil para identificar e facilitar a localização de endereços. Composto por oito dígitos, o CEP está associado a uma rua, bairro, cidade e estado específicos. O CEP desempenha um papel crucial na eficiência dos serviços postais, permitindo a classificação e distribuição adequada de correspondências e encomendas. Ao fornecer um CEP correto, facilitamos o processo de entrega e garantimos que nossas correspondências sejam encaminhadas corretamente. É possível encontrar o CEP de um determinado endereço consultando serviços online ou utilizando ferramentas disponibilizadas pelos Correios.</p>
            </Articles>

            <Articles title={"Como consultar O CEP?"}>
                <p>Preencha o número do CEP para verificar o endereço.</p>
            </Articles>

        </div>
    );
}