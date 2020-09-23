import React from 'react'
import AppLink from './AppLink'
import HeaderElement from '../styles/HeaderElement'
import {Container} from '../styles/Containers'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <HeaderElement>
            <Container>
                <AppLink label='Main' href='/'/>
                <AppLink label='About' href='/about'/>
            </Container>
        </HeaderElement>
    )
}

export default Header
