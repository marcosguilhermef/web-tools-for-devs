'use client'
import { Form, Button, InputGroup } from "react-bootstrap";
import '../conversor.css'
export default function Page(){

    return(
        <div className="my-5">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <InputGroup.Text className="label-name-input">
                        CPF:
                    </InputGroup.Text>
                    <Form.Control type="number w-25" className="form-control-input"/>
                </Form.Group>

                <Button className="w-100 button-color" type="submit">
                    Validar
                </Button>
            </Form>
        </div>
    );
}