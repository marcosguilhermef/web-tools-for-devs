'use client'
import { Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import Fetch from "@/app/util/Fetch";
import '@/app/conversor.css'
export default function Page(){

    const [text, setText] = useState<string>();
    const [result, setResult] = useState<boolean | null>(null);
    const URL = '/api/sha512'

    function configureTextValidation(e: React.FormEvent<HTMLInputElement>){
        const { value } = e.currentTarget
        setText(value)
    }

    async function makeRequest(){
        const fetch = await new Fetch(`${URL}/${text}`,{},Fetch.GET).doFetch();
        setResult(fetch.data)
    }


    return(
        <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <InputGroup.Text className="label-name-input">
                        de Texto:
                    </InputGroup.Text>
                    <Form.Control as="textarea" className="form-control-input" rows="5" onChange={configureTextValidation}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <InputGroup.Text className="label-name-input">
                        para SHA512:
                    </InputGroup.Text>
                    <Form.Control as="textarea" className="form-control-input" rows="5" value={result}/>
                </Form.Group>

                <Button className="w-100 button-color" type="submit" onClick={makeRequest}>
                    Converter
                </Button>
        </div>
    );
}