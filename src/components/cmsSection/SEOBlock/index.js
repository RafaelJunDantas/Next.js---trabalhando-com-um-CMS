import Head from "next/head";

export function SEOBlock(props) {
    //console.log("SEO Block: ", props);
    return (
        <Head>
            <title>{props.title}</title>
        </Head>
    )
}