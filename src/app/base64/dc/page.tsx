'use client'
import { Form, Button, InputGroup } from "react-bootstrap";
import '../../conversor.css'
export default function Page(){

    return(
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <InputGroup.Text className="label-name-input">
                        de Base64:
                    </InputGroup.Text>
                    <Form.Control as="textarea" className="form-control-input" rows="5"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <InputGroup.Text className="label-name-input">
                        para Texto:
                    </InputGroup.Text>
                    <Form.Control as="textarea" className="form-control-input" rows="5"/>
                </Form.Group>

                <Button className="w-100 button-color" type="submit">
                    Converter
                </Button>
            </Form>
        </div>
    );
}