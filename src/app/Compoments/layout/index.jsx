'use client'
import Header from "../header";
import Foot from '../foot'
import Body from '../body'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Layout(props) {
    return(
        <>
            <Header />
            <Body>
                    { props.children }
            </Body>
            <Foot />
        </>
    );
}