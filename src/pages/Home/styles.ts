import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const IntroContainer = styled.section`
  flex: 1;
  display: flex;
  margin: 5.85rem 0;
  align-items: center;
  justify-content: center;

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
