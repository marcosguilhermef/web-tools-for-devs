'use client'
import React, { useState } from "react";
import Fetch from "@/app/util/Fetch";
import { Form, Button, InputGroup } from "react-bootstrap";
import '@/app/conversor.css'
import Articles from '@/app/Compoments/Articles'
import { metadata } from "./page";

export default function Base64({h1}:{h1?:string}) {

    const [text, setText] = useState<string>();
    const [result, setResult] = useState<string>("");
    const URL = '/api/base64/dc'

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
            <h1 className="text-title">{ h1 }</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup.Text className="label-name-input">
                    de Base64:
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
                    para Texto:
                </InputGroup.Text>
                <Form.Control as="textarea" className="form-control-input" rows={5} value={result} readOnly />
            </Form.Group>

            <Button className="w-100 button-color" onClick={makeRequest}>
                Converter
            </Button>

            <Articles title={"O que é formato de texto BASE64?"}>
                <p>{'Base64 é um sistema de codificação que converte dados binários em uma representação textual, composta por caracteres ASCII. Ele é amplamente utilizado para transmitir e armazenar dados binários de forma segura e eficiente em diferentes contextos, como transferência de arquivos na web, codificação de imagens em emails e armazenamento de dados em bancos de dados.'}</p>

                <p>{'O Base64 opera em grupos de 3 bytes de dados de entrada e os converte em 4 caracteres ASCII. Essa codificação é necessária porque nem todos os caracteres ASCII podem ser facilmente transmitidos ou interpretados corretamente em todos os sistemas ou protocolos.'}</p>

                <p>{'Ao utilizar o Base64, os dados binários são convertidos em uma sequência de caracteres que consiste em letras maiúsculas e minúsculas, dígitos numéricos e alguns caracteres especiais, como "+" e "/". O número de caracteres de saída pode variar dependendo do tamanho dos dados de entrada.'}</p>

                <p>{'A principal vantagem do Base64 é a sua facilidade de implementação e compatibilidade ampla com diferentes plataformas e sistemas. Além disso, ele permite que os dados binários sejam representados em uma forma legível e segura, evitando problemas de transmissão ou armazenamento.'}</p>

                <p>{'No entanto, é importante destacar que o Base64 não é uma forma de criptografia, pois a conversão pode ser facilmente revertida, e os dados originais podem ser recuperados. Portanto, ele é adequado para uso em casos em que o objetivo é representar dados binários de forma legível e não para proteção de dados confidenciais.'}</p>
            </Articles>

            <Articles title={"O que é faz o BASE64 encode (codificador)?"}>
                <p>{'O base64 decoder tem a função de converter um texto para o formato base64'}</p>
            </Articles>

        </div>
    );
}