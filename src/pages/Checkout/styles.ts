import { Items } from './../Home/styles'
import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;

  h3 {
    margin-top: 2.31rem;

    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.44rem;
    color: ${props => props.theme['base-subtitle']};
  }
`
export const DivLeft = styled.div`
  width: 40rem;
  height: 37rem;

  font-family: 'Roboto', sans-serif;

  label {
    font-size: 1rem;
    color: ${props => props.theme['base-subtitle']};
    line-height: 1.25rem;
  }

  p {
    margin-left: 1.5rem;
    font-size: 0.75rem;
    color: ${props => props.theme['base-text']};
  }
`

const ITEMS_COLORS = {
  yellowDark: 'yellow-dark',
  purple: 'purple-normal'
} as const

interface ItemsProps {
  itemsColor: keyof typeof ITEMS_COLORS
}

export const ItemsSapan = styled.span<ItemsProps>`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  color: ${props => props.theme[ITEMS_COLORS[props.itemsColor]]};
`
export const DivAddress = styled.div`
  padding: 2.5rem;
  border-radius: 5px;
  margin: 1rem 0;
  background: ${props => props.theme['base-card']};
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  input {
    padding: 0.75rem;
    border: 1px solid ${props => props.theme['base-button']};
    border-radius: 4px;
    margin: 0.5rem;
    background: ${props => props.theme['base-input']};
  }

  input:first-child {
    width: 12.4rem;
  }

  section {
    display: flex;
  }

  section:last-child input:last-child {
    width: 3.75rem;
  }
`
export const DivPayments = styled.div`
  background: ${props => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 5px;
`
export const Buttons = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    width: 11.12rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem;
    border-radius: 6px;
    margin-top: 2.5rem;
    background: ${props => props.theme['base-button']};
    text-transform: uppercase;
    cursor: pointer;
    color: ${props => props.theme['purple-normal']};
    border: none;
  }

  label {
    font-size: 0.75rem;
    cursor: pointer;
    color: ${props => props.theme['base-text']};
  }
`
