'use client'
import { useState } from "react";
import Fetch from "@/app/util/Fetch";
import { Form, Button, InputGroup } from "react-bootstrap";
import '@/app/conversor.css'
import Articles from '@/app/Compoments/Articles'

export default function Url() {

    const [text, setText] = useState<string>();
    const [result, setResult] = useState<string>("");
    const URL = '/api/url/dc'

    function configureTextValidation(e: any) {
        const { value } = e.currentTarget
        setText(value)
    }

    async function makeRequest() {
        const fetch = await new Fetch(`${URL}/${text}`, {}, Fetch.GET).doFetch();
        setResult(fetch.data)
    }


    return (
        <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup.Text className="label-name-input">
                    para URL:
                </InputGroup.Text>
                <Form.Control
                    as="textarea"
                    className="form-control-input"
                    rows={5}
                    onChange={configureTextValidation}
                />
            </Form.Group>

            <Form.Group className="mb-3" >
                <InputGroup.Text className="label-name-input">
                    de Texto:
                </InputGroup.Text>
                <Form.Control as="textarea" className="form-control-input" rows={5} value={result} readOnly />
            </Form.Group>

            <Button className="w-100 button-color" onClick={makeRequest}>
                Converter
            </Button>
            <Articles title={"O que é formato de texto URL (percent code, ou codificação porcentagem)?"}>
                <p>O percent code, também conhecido como percent encoding ou URL encoding, é um método utilizado para representar caracteres especiais, espaços e caracteres não-ASCII em uma URL. Essa codificação é feita substituindo o caractere original por uma sequência de caracteres que começa com "%" seguido de códigos hexadecimais.</p>

                <p>Por exemplo, o espaço em branco, que normalmente seria representado por um espaço vazio, é substituído por "%20". Outros caracteres especiais têm suas representações específicas, como "%26" para "&", "%3F" para "?", e assim por diante.</p>

                <p>O percent code é importante para garantir a correta transmissão de caracteres em uma URL. Isso ocorre porque certos caracteres, como espaços e símbolos, podem ter significados especiais em uma URL e podem causar problemas de interpretação ou conflitos com a sintaxe da URL.</p>

                <p>Ao utilizar o percent encoding, os caracteres problemáticos são codificados de forma padronizada, permitindo que sejam transmitidos com segurança. Por exemplo, um URL contendo espaços é codificado como "%20" para que seja corretamente interpretado pelos navegadores e servidores.</p>

                <p>Em resumo, o percent code é uma forma de codificação utilizada em URLs para substituir caracteres especiais, espaços e caracteres não-ASCII por sequências padronizadas de caracteres hexadecimais, garantindo a correta transmissão e interpretação desses caracteres na web.</p>
            </Articles>

            <Articles title={"O que é faz o URL decode (decodificador)?"}>
                <p>O URL decode tem o objetivo de converter um texto no formato URL para o formato de texto legível.</p>
            </Articles>

        </div>
    );
}