import styled from 'styled-components'

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 8px 16px;
`

export const MainContainer = styled.section`
  width: 100%;
  height: 600px;
  color: ${({ theme }) => theme.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FooterContainer = styled.footer`
  max-width: 880px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.light};
  border-top: 1px solid ${({ theme }) => theme.light};
`
