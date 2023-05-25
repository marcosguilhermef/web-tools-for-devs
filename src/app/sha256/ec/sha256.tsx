'use client'
import { Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import Fetch from "@/app/util/Fetch";
import '@/app/conversor.css'
import Articles from '@/app/Compoments/Articles'

export default function Sha256({ h1 }: { h1?: string }) {

    const [text, setText] = useState<string>();
    const [result, setResult] = useState<string>("");
    const URL = '/api/sha256'

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
            <h1 className="text-title">{h1}</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup.Text className="label-name-input">
                    de Texto:
                </InputGroup.Text>
                <Form.Control as="textarea" className="form-control-input" rows={5} onChange={configureTextValidation} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup.Text className="label-name-input">
                    para SHA256:
                </InputGroup.Text>
                <Form.Control as="textarea" className="form-control-input" rows={5} value={result} readOnly />
            </Form.Group>

            <Button className="w-100 button-color" type="submit" onClick={makeRequest}>
                Converter
            </Button>

            <Articles title={"O que é formato de texto SHA256 ?"}>
                <p>SHA-256 (Secure Hash Algorithm 256 bits) é um algoritmo de hash criptográfico amplamente utilizado. Ele pertence à família SHA-256, sendo uma versão mais segura e robusta. O SHA-256 gera um hash de 256 bits, que é uma sequência única de caracteres que representa os dados de entrada. Essa função de hash é usada em diversos sistemas de segurança, como autenticação de arquivos, verificação de integridade e criptografia. O SHA-256 é considerado resistente a colisões e oferece uma forte garantia de segurança para proteger informações confidenciais. Ele é amplamente empregado em aplicações criptográficas, como blockchain, autenticação de senhas e armazenamento seguro de dados. A sua ampla adoção é resultado de sua eficiência, confiabilidade e comprovada resistência a ataques.</p>
            </Articles>

            <Articles title={"O que é faz o SHA256 encode (codificado)?"}>
                <p>O SHA-256 encode tem o objetivo de encriptar um texto para o formato texto para o formato de SHA-256.</p>
            </Articles>
        </div>
    );
}