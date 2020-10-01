import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/Global'
import NextNprogress from 'nextjs-progressbar'

interface CustomAppProps extends AppProps {}

const CustomApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <NextNprogress
                options={{ easing: 'ease', speed: 500 }}
                color={'#ef476f'}
            />
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default CustomApp
