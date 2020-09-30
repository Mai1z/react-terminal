import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import {LayoutProps} from '../interfaces'

const Layout: React.FC<LayoutProps> = ({pageTitle, children}) => {
    return (
        <>
            <Head>
               <title>RT | {pageTitle}</title>
            </Head>
            <div>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    )
}

export default Layout
