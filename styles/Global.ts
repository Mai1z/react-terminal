import { createGlobalStyle } from 'styled-components'
import { ThemeType } from './theme'

interface Props {
    theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    outline: none
  }
  body {
    font-size: calc(14px + .5vw);
    font-family: 'Fira Sans', 'Lato', sans-serif;
    line-height: 1.7;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.medium};
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.dark}
  }
  ul {
    list-style: none
  }
  .page-transition-enter {
    opacity: 0;
  }
  .page-transition-enter-active {
    opacity: 1;
    transition: opacity 500ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }
`

export default GlobalStyle
