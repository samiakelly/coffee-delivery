import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 0.875rem;

  nav {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  span {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 8.9rem;
    height: 2.4rem;
    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 2.4rem;
    height: 2.4rem;
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    cursor: pointer;
  }
`
