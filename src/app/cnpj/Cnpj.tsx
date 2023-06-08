'use client'
import { Form, Button, InputGroup } from "react-bootstrap";
import '@/app/conversor.css'
import Fetch from "@/app/util/Fetch";
import React, { useRef, useState } from "react";
import Articles from '@/app/Compoments/Articles'

export default function Cnpj({ h1 }: { h1?: string }) {
    const [cnpj, setCnpj] = useState<string>();
    const [result, setResult] = useState<boolean | null>(null);
    const cnpjRef = useRef<any>('')
    const URL = '/api/cnpj/vl'


    function configureCPFValidation(e: any) {
        const { value } = e.currentTarget
        setCnpj(value)
        cnpjRef.current.value = cnpjMask(value)
    }

    function cnpjMask(v: string){
        v=v.replace(/\D/g,"")                    
        v=v.replace(/(\d{2})(\d)/,"$1.$2")       
        v=v.replace(/(\d{3})(\d)/,"$1.$2")                                
        v=v.replace(/(\d{3})(\d{4})/,"$1/$2")
        v=v.replace(/(\d{4})(\d{2})$/,"$1-$2")
        return v
    }



    async function mageRequest() {
        const fetch = await new Fetch(`${URL}`, {
            'cnpj': cnpj
        }, Fetch.POST).doFetch();
        setResult(fetch.data)
    }

    return (
        <div>
            <h1 className="text-title">{h1}</h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup.Text className="label-name-input">
                    CNPJ:
                </InputGroup.Text>
                <Form.Control
                    type="number w-25"
                    className="form-control-input"
                    onChange={configureCPFValidation}
                    onFocus={() => (setResult(null))}
                    maxLength={18}
                    isValid={!!result}
                    isInvalid={result === null ? false : !result}
                    ref={cnpjRef}
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
                Validar {result}
            </Button>

            <Articles title={"O que é o CNPJ (Cadastro Nacional da Pessoa Jurídica)?"}>
                <p>
                    CNPJ, ou Cadastro Nacional da Pessoa Jurídica, é um registro obrigatório para todas as empresas e organizações no Brasil. Ele é emitido pela Receita Federal e serve como uma espécie de identidade fiscal para as entidades jurídicas.
                </p>
                <p>
                O CNPJ é composto por 14 dígitos e contém informações importantes sobre a empresa, como nome, endereço, atividade econômica, entre outros dados relevantes. Ele é utilizado para identificar e acompanhar as movimentações fiscais, tributárias e comerciais da empresa.
                </p>
                <p>
                    Além disso, o CNPJ é fundamental para o cumprimento das obrigações fiscais e tributárias das empresas. É por meio desse registro que são efetuados os pagamentos de impostos, como o Imposto de Renda, o Imposto sobre Circulação de Mercadorias e Serviços (ICMS) e o Imposto sobre Produtos Industrializados (IPI).
                </p>
                <p>
                O CNPJ também é exigido em diversas transações comerciais, como abertura de contas bancárias, obtenção de crédito, emissão de notas fiscais, participação em licitações e contratos com o governo, entre outros procedimentos legais.
                </p>
                <p>
                Além disso, o CNPJ é importante para a transparência e o controle das atividades empresariais. Por meio desse registro, é possível consultar informações sobre a situação cadastral da empresa, como sua regularidade junto aos órgãos competentes, o que contribui para a segurança e confiabilidade nas relações comerciais.
                </p>
                <p>
                Em resumo, o CNPJ é o registro que identifica e legaliza uma pessoa jurídica no Brasil. Ele é essencial para o cumprimento das obrigações fiscais e tributárias, além de ser utilizado em diversas transações comerciais. O CNPJ proporciona transparência e segurança nas relações empresariais, contribuindo para o desenvolvimento econômico do país.
                </p>
            </Articles>

            <Articles title={"O que é faz o validador de CNPJ?"}>
                <p>O validador de CNPJ é uma ferramenta que verifica se um número de CNPJ é válido, ou seja, se está de acordo com a estrutura e os algoritmos de cálculo estabelecidos pela Receita Federal.</p>
            </Articles>

        </div>
    );
}