import React from 'react'
import AppLink from './AppLink'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <>
            <AppLink label='RT' href='/'/>
            <AppLink label='About' href='/about'/>
        </>
    )
}

export default Header
