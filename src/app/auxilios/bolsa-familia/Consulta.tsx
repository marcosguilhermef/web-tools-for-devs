'use client'
import React, { useState } from "react";
import Fetch from '@/app/util/Fetch';
import { Button, Form, InputGroup } from 'react-bootstrap';
import '@/app/conversor.css'
import { BolsaFamiliaType } from "./auxilio-type";
import Articles from '@/app/Compoments/Articles'

export default function Consulta() {
    const [cpf, setCpf] = useState<string>();
    const [date, setDate] = useState<Date>(new Date);
    const [result, setResult] = useState<BolsaFamiliaType[]>();
    const URL = '/api/auxilios/bolsa-familia'

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
                        <div><span>Nome: </span> {e?.titularBolsaFamilia.nome}</div>
                        <div><span>id: </span> {e?.id}</div>
                        <div><span>NIS: </span> {e?.titularBolsaFamilia.nis}</div>
                        <div><span>CPF: </span> {e?.titularBolsaFamilia.cpfFormatado}</div>
                        <div><span>Data de competência: </span> {e?.dataMesCompetencia}</div>
                        <div><span>Data de referência: </span> {e?.dataMesReferencia}</div>
                        <div><span>Cidade: </span> {e?.municipio.nomeIBGE}</div>
                        <div><span>Estado: </span> {e?.municipio.uf.sigla}</div>
                        <div>
                            <span>Valor: </span>
                            {
                                new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'BRL',

                                }).format(e?.valor)
                            }
                        </div>
                    </div>

                ))
            }

            <Articles title={"O que é o Auxílio Brasil)?"}>
                <p>O Bolsa Família é um programa de transferência de renda criado pelo governo brasileiro com o objetivo de combater a pobreza e promover a inclusão social. O programa atende famílias em situação de vulnerabilidade, levando em consideração critérios como a renda per capita e a composição familiar. Por meio do Bolsa Família, essas famílias recebem um auxílio financeiro mensal, cujo valor varia de acordo com a renda e o número de membros da família. O programa estabelece contrapartidas, como a frequência escolar obrigatória de crianças e adolescentes, e o acompanhamento da saúde de gestantes e crianças. Essas condicionalidades visam promover a educação, a saúde e o desenvolvimento integral das famílias beneficiadas, além de quebrar o ciclo de pobreza e desigualdade. O Bolsa Família é um programa importante no enfrentamento da pobreza no Brasil e tem beneficiado milhões de famílias em todo o país.</p>
            </Articles>

            <Articles title={"Como consultar o bolsa fámilia?"}>
                <p>Escreva o número do NIS no campo acima para buscar informações sobre o bolsa família.</p>
            </Articles>
        </div>
    )
}