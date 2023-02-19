import coffe from '../../assets/Imagem.svg'
import coffeExpresso from '../../assets/coffee-expresso.svg'
import coffeAmericano from '../../assets/coffee-americano.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import {
  IntroContainer,
  HomeContainer,
  Items,
  ItemsSecondary,
  ItemsSapan,
  ListaCoffeContainer,
  ListaCoffee,
  CoffeeCard,
  Buy,
  Amount,
  ButtonCart
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <Items>
            <ItemsSecondary>
              <div>
                <nav>
                  <ItemsSapan itemsColor="yellowDark">
                    <ShoppingCart size={16} weight="fill" />
                  </ItemsSapan>
                  <p>Compra simples e segura</p>
                </nav>
                <nav>
                  <ItemsSapan itemsColor="yellow">
                    <Timer size={16} weight="fill" />
                  </ItemsSapan>
                  <p>Entrega rápida e rastreada</p>
                </nav>
              </div>

              <div>
                <nav>
                  <ItemsSapan itemsColor="gray">
                    <Package size={16} weight="fill" />
                  </ItemsSapan>
                  <p>Embalagem mantém o café intacto</p>
                </nav>
                <nav>
                  <ItemsSapan itemsColor="purple">
                    <Coffee size={16} weight="fill" />
                  </ItemsSapan>
                  <p>O café chega fresquinho até você</p>
                </nav>
              </div>
            </ItemsSecondary>
          </Items>
        </div>
        <img
          src={coffe}
          alt="Um copo de café, com uma frase coffe delivery, e grãos de café"
        ></img>
      </IntroContainer>
      <ListaCoffeContainer>
        <h2>Nossos cafés</h2>
        <ListaCoffee>
          <CoffeeCard>
            <img src={coffeExpresso}></img>
            <span>Tradicional</span>
            <h3>Expresso Tradicional</h3>
            <p>Café expresso com calda de chocolate, pouco leite e espuma</p>
            <Buy>
              <div>
                <p>R$</p>
                <h3>9,90</h3>
              </div>
              <Amount>
                <button>-</button>
                <label>1</label>
                <button>+</button>
              </Amount>
              <ButtonCart>
                <ShoppingCart size={16} weight="fill" />
              </ButtonCart>
            </Buy>
          </CoffeeCard>
          <CoffeeCard>
            <img src={coffeAmericano}></img>
            <span>Tradicional</span>
            <h3>Expresso Americano</h3>
            <p>Expresso diluído, menos intenso que o tradicional</p>
            <Buy>
              <div>
                <p>R$</p>
                <h3>9,90</h3>
              </div>
              <Amount>
                <button>-</button>
                <label>1</label>
                <button>+</button>
              </Amount>
              <ButtonCart>
                <ShoppingCart size={16} weight="fill" />
              </ButtonCart>
            </Buy>
          </CoffeeCard>
        </ListaCoffee>
      </ListaCoffeContainer>
    </HomeContainer>
  )
}
