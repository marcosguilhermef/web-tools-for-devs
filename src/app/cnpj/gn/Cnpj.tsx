'use client'
import { Form, Button, InputGroup } from "react-bootstrap";
import '@/app/conversor.css'
import Fetch from "@/app/util/Fetch";
import React, { useEffect, useRef, useState } from "react";
import Articles from '@/app/Compoments/Articles'

export default function Cnpj({ h1 }: { h1?: string }) {
    const [cnpj, setCnpj] = useState<string>();
    const [formated, setFomated] = useState<boolean>(false);
    const [result, setResult] = useState<boolean | null>(null);
    const cnpjRef = useRef<any>('')
    const URL = '/api/cnpj/ge'

    async function mageRequest() {
        const fetch = await new Fetch(`${URL}?formated=${formated}`, {}, Fetch.GET).doFetch();
        cnpjRef.current.value = fetch.data;
    }


    function copiar() {
        cnpjRef.current.select()
        document.execCommand('copy');
    }

    function handle(e: any) {
        const { value, name } = e.target
        setFomated(value)
    }
    useEffect(() => {
        mageRequest()
    }, [])

    return (
        <div>
            <h1 className="text-title">{h1}</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Check
                    type="radio"
                    label={"Formatado"}
                    value={'true'}
                    name="formatado"
                    onChange={handle}
                />
                <Form.Check
                    type="radio"
                    label={"Não formatado"}
                    value={'false'}
                    name="formatado"
                    onChange={handle}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup.Text className="label-name-input">
                    CNPJ:
                </InputGroup.Text>
                <Form.Control
                    type="number w-25"
                    className="form-control-input"
                    onFocus={() => (setResult(null))}
                    isValid={!!result}
                    isInvalid={result === null ? false : !result}
                    defaultValue={''}
                    ref={cnpjRef}
                    readOnly
                />
                <Form.Control.Feedback type="invalid">
                    CNPJ incorreto ou não existe.
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                    CNPJ válido.
                </Form.Control.Feedback>
            </Form.Group>

            <Button
                className="w-100 button-color"
                type="submit"
                onClick={mageRequest}
            >
                Gerar novo número {result}
            </Button>

            <Button
                className="w-100 button-color mt-3"
                type="submit"
                onClick={copiar}
            >
                Copiar {result}
            </Button>

            <Articles title={"Para que serve o CNPJ?"}>
                <p>O CNPJ, Cadastro Nacional da Pessoa Jurídica, é um número de identificação essencial para empresas no Brasil. Ele serve para identificar e registrar legalmente uma empresa, facilitando sua regularização, controle fiscal, tributário e transações comerciais. O CNPJ é emitido pela Receita Federal e contém informações como razão social, nome fantasia, endereço e dados dos sócios. É uma ferramenta fundamental para garantir a transparência e segurança nas atividades empresariais, além de permitir o acesso a benefícios fiscais e créditos, bem como demonstrar a legalidade e confiabilidade da empresa perante clientes, fornecedores e órgãos governamentais.</p>
            </Articles>

            <Articles title={"O que é faz o gerador de CNPJ?"}>
                <p>Um gerador de CNPJ é uma ferramenta online que gera números de identificação no formato CNPJ. Ele pode ser usado para diversos fins, como testes, desenvolvimento de softwares e criação de dados fictícios para exemplos e simulações. Com um gerador de CNPJ, é possível agilizar processos de cadastro, preenchimento de formulários e realizar verificações de sistemas. Além disso, pode ser útil para estudantes e pesquisadores que precisam de informações fictícias para análises estatísticas ou acadêmicas. No entanto, é importante ressaltar que o uso de um CNPJ válido e oficial é obrigatório para qualquer atividade empresarial legal e o uso indevido de números falsos pode incorrer em problemas legais. Portanto, é fundamental utilizar um gerador de CNPJ apenas para fins não oficiais e sempre se certificar de seguir as regulamentações e leis vigentes em seu país.</p>
            </Articles>

        </div>
    );
}