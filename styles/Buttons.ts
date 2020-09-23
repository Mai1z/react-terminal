import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.secondary};
  padding: 15px 25px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ theme }) => theme.white};
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`

export const OperatorButton = styled.li`
  border: 2px solid ${({ theme }) => theme.secondary};
  cursor: pointer;
  text-align: center;
  padding: 15px 15px;
  transition: 0.1s linear;
  width: 150px;
  color: ${({ theme }) => theme.secondary};
  margin: 15px;
  &:hover {
    background: ${({theme}) => theme.secondary};
    color: ${({theme}) => theme.white}
  }
`

