import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './header';
//You can directly use below semetic-ui css section into your application so you don't need to import the CSS through a CDN
//import 'semantic-ui-css/semantic.min.css';
import Head from 'next/head';



export default (props)=>{
    return (
        <Container>
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
            </Head>
        <div>
            <Header/>
            {props.children}
        </div>
        </Container>
    );

}