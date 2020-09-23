import React from 'react'
import {FooterContainer} from '../styles/Containers'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <FooterContainer>
            <p>Build with Next.js</p>
        </FooterContainer>
    )
}

export default Footer
