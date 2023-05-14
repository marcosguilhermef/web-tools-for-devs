import Head from "next/head";
export default function Seo({children,} : { children: React.ReactNode;}){
    return(
        <Head>
            { children }
        </Head>
    )
}