import coffe from '../../assets/Imagem.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import { IntroContainer, HomeContainer, Items, ItemsSecondary } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <Items>
            <ItemsSecondary>
              <div>
                <nav>
                  <span>
                    <ShoppingCart size={16} />
                  </span>
                  <p>Compra simples e segura</p>
                </nav>
                <nav>
                  <span>
                    <Timer size={16} />
                  </span>
                  <p>Entrega rápida e rastreada</p>
                </nav>
              </div>

              <div>
                <nav>
                  <span>
                    <Package size={16} />
                  </span>
                  <p>Embalagem mantém o café intacto</p>
                </nav>
                <nav>
                  <span>
                    <Coffee size={16} />
                  </span>
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
