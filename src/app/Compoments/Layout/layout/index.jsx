'use client'
import Header from "@/app/Compoments/Layout/header";
import Foot from '@/app/Compoments/Layout/foot'
import Body from '@/app/Compoments/Layout/body'
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