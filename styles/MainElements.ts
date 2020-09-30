import styled from 'styled-components'

export const OperatorsList = styled.ul`
  display:flex;
  flex-wrap: wrap;
  padding-left: 0;
  justify-content: center;
`
export const PayForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  div {
    display: flex;
    flex-direction: column;
  }
  input {
    padding: 10px;
    font-weight: bold;
    font-size: 15px;
  }
  p {
    color: ${({ theme }) => (theme.secondary)};
    font-size: 16px;
  }
  button {
    width: 200px;
    margin: 20px auto 0;
  }
`
export const ModalStyle = styled.div`
    width: 300px;
`
