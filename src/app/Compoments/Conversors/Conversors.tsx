'use client'

import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import Fetch from "@/app/util/Fetch";
import './conversor.css'

export default function Conversor(
    {
        h1, 
        url,
        t1,
        t2,
        children
    }: 
    { 
        h1?: string, 
        url: string,
        t1: string,
        t2: string,
        children: React.ReactNode
    }) {

    type text = { text: string };

    const [code, setText] = useState<text>();
    const [result, setResult] = useState<string>();
    const URL = url

    function configureTextValidation(e: any) {
        const { value } = e.currentTarget
        setText({
            'text': value
        })
    }

    async function makeRequest() {
        const fetch = await new Fetch(`${URL}`, code, Fetch.POST).doFetch();
        setResult(fetch.data)
    }


    return (
        <div>
            <h1 className="text-title">{h1}</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup.Text className="label-name-input">
                    { t1 }:
                </InputGroup.Text>
                <Form.Control as="textarea" className="form-control-input" rows={5} onChange={configureTextValidation} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup.Text className="label-name-input">
                    { t2 }:
                </InputGroup.Text>
                <Form.Control as="textarea" className="form-control-input" rows={5} defaultValue={''} value={result} readOnly />
            </Form.Group>

            <Button className="w-100 button-color" type="submit" onClick={makeRequest}>
                Converter
            </Button>
            <div>
                { children }
            </div>
        </div>
    );
}