'use client'
import React, { useState } from "react";
import Fetch from '@/app/util/Fetch';
import { Button, Form, InputGroup } from 'react-bootstrap';
import '@/app/conversor.css'
import { auxilioType } from "./auxilio-type";
import Articles from '@/app/Compoments/Articles'

export default function Consulta({h1}:{h1?:string}) {
    const [cpf, setCpf] = useState<string>();
    const [date, setDate] = useState<Date>(new Date);
    const [result, setResult] = useState<auxilioType[]>();
    const URL = '/api/auxilios/auxilio-brasil'

    function configureCPFValidation(e: any) {
        const { value } = e.currentTarget
        setCpf(value)
    }

    function configureDateValidation(e: any) {
        const { value } = e.currentTarget
        setDate(new Date(value))
    }


    async function mageRequest() {
        if ((date.getMonth() + 1) < 10) {
            let fetch = await new Fetch(`${URL}/${cpf}/${date?.getFullYear().toString().concat("0" + (date.getMonth() + 1).toString())}`, {}, Fetch.GET).doFetch();
            setResult(fetch)
        } else {
            let fetch = await new Fetch(`${URL}/${cpf}/${date?.getFullYear().toString().concat((date.getMonth() + 1).toString())}`, {}, Fetch.GET).doFetch();
            setResult(fetch)
        }
    }

    return (
        <div>
            <h1 className="text-title">{h1}</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup.Text className="label-name-input">
                    CPF ou NIS:
                </InputGroup.Text>
                <Form.Control
                    type="number w-25"
                    className="form-control-input"
                    onChange={configureCPFValidation}
                    onFocus={() => (setResult(undefined))}
                    maxLength={11}
                    isValid={!!result}
                    isInvalid={result === undefined ? false : !result}
                />
                <Form.Control.Feedback type="invalid">
                    CPF incorreto ou não existe.
                </Form.Control.Feedback>

                <Form.Control.Feedback type="valid">
                    CPF válido.
                </Form.Control.Feedback>


            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup.Text className="label-name-input">
                    Mês de referência:
                </InputGroup.Text>
                <Form.Control
                    type="month"
                    className="form-control-input"
                    onChange={configureDateValidation}
                    onFocus={() => (setResult(undefined))}
                    maxLength={11}
                    isValid={!!result}
                    isInvalid={result === undefined ? false : !result}
                />
                <Form.Control.Feedback type="invalid">
                    Nada encontrado
                </Form.Control.Feedback>

                <Form.Control.Feedback type="valid">
                    Dados válidos
                </Form.Control.Feedback>


            </Form.Group>

            <Button
                className="w-100 button-color"
                type="submit"
                onClick={mageRequest}
            >
                Validar {!!result}
            </Button>

            {
                result?.map((e) => (
                    <div key={e.id} className="resultato-query">
                        <div><span>Nome: </span> {e?.beneficiarioAuxilioBrasil.nome}</div>
                        <div><span>id: </span> {e?.id}</div>
                        <div><span>NIS: </span> {e?.beneficiarioAuxilioBrasil.nis}</div>
                        <div><span>CPF: </span> {e?.beneficiarioAuxilioBrasil.cpfFormatado}</div>
                        <div><span>Data de competência: </span> {e?.dataMesCompetencia}</div>
                        <div><span>Data de referência: </span> {e?.dataMesReferencia}</div>
                        <div><span>Cidade: </span> {e?.municipio.nomeIBGE}</div>
                        <div><span>Estado: </span> {e?.municipio.uf.sigla}</div>
                        <div><span>Valor: </span> {e?.valorSaque}</div>
                    </div>

                ))
            }

            <Articles title={"O que é o Auxílio Brasil)?"}>
                <p>O Auxílio Brasil é um programa social do governo brasileiro que foi criado para substituir o Bolsa Família. Com o objetivo de combater a pobreza e promover a inclusão social, o Auxílio Brasil oferece auxílio financeiro a famílias em situação de vulnerabilidade socioeconômica. O programa visa melhorar as condições de vida dessas famílias por meio de transferências de renda condicionadas ao cumprimento de obrigações, como a frequência escolar de crianças e jovens, a realização de exames de saúde e a participação em programas de qualificação profissional. O Auxílio Brasil busca não apenas aliviar a pobreza, mas também incentivar a educação, a saúde e o desenvolvimento socioeconômico das famílias beneficiadas..</p>
            </Articles>

            <Articles title={"Como consultar auxílio brasil?"}>
                <p>Preencha o número do CEP para verificar o endereço.</p>
            </Articles>

        </div>
    )
}