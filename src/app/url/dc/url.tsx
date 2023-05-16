'use client'
import { useState } from "react";
import Fetch from "@/app/util/Fetch";
import { Form, Button, InputGroup } from "react-bootstrap";
import '@/app/conversor.css'
export default function Url(){

    const [text, setText] = useState<string>();
    const [result, setResult] = useState<boolean | null>(null);
    const URL = '/api/url/dc'

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
                        para URL:
                    </InputGroup.Text>
                    <Form.Control 
                        as="textarea" 
                        className="form-control-input" 
                        rows="5"
                        onChange={configureTextValidation}
                        />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <InputGroup.Text className="label-name-input">
                        de Texto:
                    </InputGroup.Text>
                    <Form.Control as="textarea" className="form-control-input" rows="5" value={result} readOnly/>
                </Form.Group>

                <Button className="w-100 button-color" onClick={makeRequest}>
                    Converter
                </Button>
        </div>
    );
}