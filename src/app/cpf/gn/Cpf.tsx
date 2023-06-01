'use client'
import { Form, Button, InputGroup } from "react-bootstrap";
import '@/app/conversor.css'
import Fetch from "@/app/util/Fetch";
import React, { useEffect, useRef, useState } from "react";
import Articles from '@/app/Compoments/Articles'

export default function Cpf({ h1 }: { h1?: string }) {
    const [cpf, setCpf] = useState<string>();
    const [result, setResult] = useState<boolean | null>(null);
    const cpfRef = useRef<any>('')
    const URL = '/api/cpf/ge'

    async function mageRequest() {
        const fetch = await new Fetch(`${URL}`, {}, Fetch.GET).doFetch();
        setCpf(fetch.data)
    }


    function copiar(){
        cpfRef.current.select()
        document.execCommand('copy');
    }

    useEffect( () => {
        mageRequest()
    },[])

    return (
        <div>
            <h1 className="text-title">{h1}</h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup.Text className="label-name-input">
                    CPF:
                </InputGroup.Text>
                <Form.Control
                    type="number w-25"
                    className="form-control-input"
                    onFocus={() => (setResult(null))}
                    maxLength={11}
                    isValid={!!result}
                    isInvalid={result === null ? false : !result}
                    value={cpf}
                    defaultValue={''}
                    ref={cpfRef}
                    readOnly
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
                Gerar novo número {result}
            </Button>

            <Button
                className="w-100 button-color mt-3"
                type="submit"
                onClick={copiar}
            >
                Copiar {result}
            </Button>

            <Articles title={"Para que serve o CPF (cadastro de pessoa física)?"}>
                <p>O CPF (Cadastro de Pessoa Física) é um documento utilizado no Brasil para identificar e rastrear os cidadãos em suas atividades financeiras e fiscais. Ele é essencial para realizar uma variedade de transações, como abrir contas bancárias, obter crédito, fazer compras parceladas, emitir notas fiscais, declarar imposto de renda, entre outros. O CPF é uma forma de garantir a segurança e a transparência nas relações comerciais e financeiras, além de auxiliar na prevenção de fraudes e irregularidades.</p>
            </Articles>

            <Articles title={"O que é faz o gerador de CPF?"}>
                <p>Um gerador de CPF é uma ferramenta exclusiva para desenvolvedores, testadores de sistemas, estudantes e afins. Sua finalidade é permitir que esses profissionais testem e validem seus sistemas e softwares contra fraudes, simulando números de CPF válidos fictícios. É importante ressaltar que o uso dessa ferramenta para outros fins, como práticas criminosas, é estritamente proibido. Os desenvolvedores da ferramenta se ausentam de qualquer responsabilidade pelo uso inadequado e reforçam a importância de utilizá-la apenas para fins legítimos e éticos.</p>
            </Articles>

        </div>
    );
}