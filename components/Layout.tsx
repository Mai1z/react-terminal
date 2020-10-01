import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import {LayoutProps} from '../interfaces'
import { PageTransition } from 'next-page-transitions'

const Layout: React.FC<LayoutProps> = ({pageTitle, children}) => {
    return (
        <>
            <Head>
               <title>RT | {pageTitle}</title>
            </Head>
            <div>
                <Header/>
                <main>
                    <PageTransition timeout={300} classNames="page-transition">
                        {children}
                    </PageTransition>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default Layout
