import coffe from '../../assets/Imagem.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import {
  IntroContainer,
  HomeContainer,
  Items,
  ItemsSecondary,
  ItemsSapan
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
      <section></section>
    </HomeContainer>
  )
}
