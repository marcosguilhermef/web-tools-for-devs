'use client'
import { Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import Fetch from "@/app/util/Fetch";
import '@/app/conversor.css'
import Articles from '@/app/Compoments/Articles'

export default function Sha512({h1}:{h1?:string}) {

    const [text, setText] = useState<string>();
    const [result, setResult] = useState<string>("");
    const URL = '/api/sha512'

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
                    para SHA512:
                </InputGroup.Text>
                <Form.Control as="textarea" className="form-control-input" rows={5} value={result} readOnly />
            </Form.Group>

            <Button className="w-100 button-color" type="submit" onClick={makeRequest}>
                Converter
            </Button>

            <Articles title={"O que é formato de texto SHA512 ?"}>
            <p>SHA-512 (Secure Hash Algorithm 512 bits) é um algoritmo de hash criptográfico que pertence à família SHA-2. Assim como o SHA-256, o SHA-512 é amplamente utilizado em sistemas de segurança para garantir a integridade e autenticidade dos dados. A principal diferença é que o SHA-512 gera um hash de 512 bits, tornando-o mais robusto e seguro em comparação com o SHA-256.</p>

            <p>O SHA-512 é uma função de hash unidirecional, o que significa que é fácil calcular o hash de um dado, mas é extremamente difícil reverter o processo e obter os dados originais a partir do hash. Ele é utilizado em várias aplicações, como autenticação de senhas, verificação de integridade de arquivos e criptografia.</p>

            <p>Devido à sua maior capacidade de bits, o SHA-512 oferece uma resistência ainda maior a ataques criptográficos em comparação com algoritmos de hash de menor tamanho. Sua utilização é comum em ambientes que exigem um alto nível de segurança e proteção de dados, como sistemas bancários, criptografia de senhas e certificados digitais. O SHA-512 continua sendo uma escolha confiável para garantir a segurança e a integridade dos dados em diversas aplicações críticas.</p>
            </Articles>

            <Articles title={"O que é faz o SHA512 encode (codificador)?"}>
                <p>O SHA-512 encode tem o objetivo de encriptar um texto para o formato texto para o formato de SHA-512.</p>
            </Articles>
        </div>
    );
}