'use client'
import { Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import Fetch from "@/app/util/Fetch";
import '@/app/conversor.css'
import Articles from '@/app/Compoments/Articles'

export default function MD5() {

    const [text, setText] = useState<string>();
    const [result, setResult] = useState<string>("");
    const URL = '/api/md5/ec'

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
                    de Texto:
                </InputGroup.Text>
                <Form.Control as="textarea" className="form-control-input" rows={5} onChange={configureTextValidation} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup.Text className="label-name-input">
                    para MD5:
                </InputGroup.Text>
                <Form.Control as="textarea" className="form-control-input" rows={5} value={result} readOnly />
            </Form.Group>

            <Button className="w-100 button-color" type="submit" onClick={makeRequest}>
                Converter
            </Button>

            <Articles title={"O que é formato de texto MD5?"}>
                <p>MD5 (Message Digest Algorithm 5) é um algoritmo de hash amplamente utilizado, embora tenha se tornado menos seguro ao longo dos anos. Ele gera um hash de 128 bits, representando uma sequência única de caracteres que identifica os dados de entrada. O MD5 é um algoritmo unidirecional, o que significa que é fácil calcular o hash de um dado, mas extremamente difícil reverter o processo e obter os dados originais a partir do hash.</p>

                <p>No entanto, devido às vulnerabilidades descobertas ao longo do tempo, o MD5 não é mais considerado seguro para aplicações que requerem uma proteção robusta de dados. É possível encontrar colisões (dois dados diferentes que produzem o mesmo hash) com certa facilidade, o que compromete a confiabilidade do algoritmo.</p>

                <p>Atualmente, o MD5 é amplamente utilizado em situações que não exigem uma segurança forte, como verificação de integridade de arquivos e checksums simples. No entanto, para aplicações sensíveis, é recomendado o uso de algoritmos de hash mais seguros, como SHA-256 ou SHA-512, que oferecem maior resistência a ataques criptográficos e colisões.</p>
            </Articles>

            <Articles title={"O que é faz o MD5 encode (codificador)?"}>
                <p>O MD5 encode tem o objetivo de encriptar um texto para o formato texto para o formato de MD5.</p>
            </Articles>
        </div>
    );
}