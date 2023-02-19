import { Coffee } from 'phosphor-react'
import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`
export const IntroContainer = styled.section`
  flex: 1;
  display: flex;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 3rem;
    line-height: 3.4rem;
    color: ${props => props.theme['base-title']};
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 1.63rem;
    margin: 1rem 0;
    color: ${props => props.theme['base-subtitle']};
  }
`
export const Items = styled.div`
  margin: 3.19rem 0;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${props => props.theme['base-text']};
`
export const ItemsSecondary = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  nav {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    gap: 0.75rem;
  }
`

const ITEMS_COLORS = {
  yellowDark: 'yellow-dark',
  gray: 'base-text',
  yellow: 'yellow-normal',
  purple: 'purple-normal'
} as const

interface ItemsProps {
  itemsColor: keyof typeof ITEMS_COLORS
}

export const ItemsSapan = styled.span<ItemsProps>`
  padding: 8px;
  border-radius: 50%;
  background: ${props => props.theme[ITEMS_COLORS[props.itemsColor]]};
  color: ${props => props.theme.white};
`
export const ListaCoffeContainer = styled.section`
  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: bold;
    line-height: 2.6rem;
    color: ${props => props.theme['base-subtitle']};
  }
`
export const ListaCoffee = styled.div`
  margin: 4rem 0;
  display: flex;
  gap: 2rem;
`
export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${props => props.theme['base-card']};
  width: 16rem;
  height: 19.38rem;
  padding: 0 1.25rem;
  align-items: center;
  border-radius: 6px 36px 6px 36px;

  img {
    margin-top: -1.5rem;
  }

  span {
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    padding: 4px 8px;
    font-family: 'Roboto', sans-serif;border-radius: 100px;
    font-weight: 700;
    line-height: 0.81rem
    font-size: 0.625rem;
  }

  p {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.14rem;
    color: ${props => props.theme['base-label']}; 
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const Buy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  p {
    font-size: 0.75rem;
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 2.6rem;
    color: ${props => props.theme['base-text']};
  }

  div {
    display: flex;
    align-items: center;
    gap: 2px;
  }
`
export const Amount = styled.div`
  display: flex;
  margin: 0 0.75rem;
  width: 4.5rem;
  height: 2.38rem;
  border-radius: 6px;
  padding: 8px;
  background: ${props => props.theme['base-button']};

  label {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.3rem;
    color: ${props => props.theme['base-title']};
  }

  button {
    width: 100%;
    border: none;
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme['purple-normal']};
    background: transparent;

    cursor: pointer;
  }
`
export const ButtonCart = styled.button`
  color: ${props => props.theme.white};
  background: ${props => props.theme['purple-dark']};
  border: none;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
`
