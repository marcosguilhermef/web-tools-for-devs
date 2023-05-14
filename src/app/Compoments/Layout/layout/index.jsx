'use client'
import Header from "../header";
import Foot from '../foot'
import Body from '../body'
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