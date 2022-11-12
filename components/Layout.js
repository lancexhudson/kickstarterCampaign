import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';
 
const Layout = (props) => {
    return (
        <Container>
            {/* <Head>
            <link rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui-react" />
            </Head> */}
            <Header />
            {props.children}
            <h1>Footer</h1>
        </Container>
    );
  
};
export default Layout;