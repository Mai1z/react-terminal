import styled from 'styled-components'

export const Title = styled.h1<{ main?: boolean }>`
  color: ${({ theme, main }) => (theme.secondary)};
  font-size: ${({ main }) => (main ? '3.5em' : '2em')};
  line-height: ${({ main }) => (main ? 1 : 1.6)};
  margin-bottom: ${({ main }) => (main ? '8px' : '24px')};
  text-align: center;
`

export const Paragraph = styled.p<{ light?: boolean }>`
  color: ${({ theme, light }) => (light ? theme.white : theme.dark)};
  font-size: 1.1em;
  margin-bottom: 1.5rem;
`

