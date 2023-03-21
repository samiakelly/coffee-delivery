import coffeExpresso from '../../assets/coffee-expresso.svg'
import coffeAmericano from '../../assets/coffee-americano.svg'
import capuccino from '../../assets/capuccino.svg'
import chocolateQuente from '../../assets/chocolate-quente.svg'
import coffeArabe from '../../assets/coffe-arabe.svg'
import coffeComLeite from '../../assets/coffe-com-leite.svg'
import coffeCubano from '../../assets/coffee-cubano.svg'
import coffeGelado from '../../assets/coffee-gelado.svg'
import coffeHavaiano from '../../assets/coffee-havaiano.svg'
import coffeLatte from '../../assets/coffee-latte.svg'
import coffeMacchiato from '../../assets/coffee-macchiato.svg'
import coffeMocaccino from '../../assets/coffee-mocaccino.svg'
import coffeExpressoCremeso from '../../assets/expresso-cremoso.svg'
import coffeIrlandes from '../../assets/irlandes.svg'

import { ShoppingCart } from 'phosphor-react'

import { ListaCoffee, CoffeeCard, Buy, Amount, ButtonCart } from './styles'

const coffes = [
  {
    id: 'coffeExpresso',
    img: coffeExpresso,
    type: 'Tradicional',
    name: 'Expresso Tradicional',
    text: 'O tradicional café feito com água quente e grãos moídos'
  },
  {
    id: 'coffeAmericano',
    img: coffeAmericano,
    type: 'Tradicional',
    name: 'Expresso Americano',
    text: 'Expresso diluído, menos intenso que o tradicional'
  },
  {
    id: 'coffeExpressoCremeso',
    img: coffeExpressoCremeso,
    type: 'Tradicional',
    name: 'Expresso Cremoso',
    text: 'Café expresso tradicional com espuma cremosa'
  },
  {
    id: 'coffeGelado',
    img: coffeGelado,
    type: 'Tradicional',
    name: 'Expresso Gelado',
    text: 'Bebida preparada com café expresso e cubos de gelo'
  },
  {
    id: 'coffeComLeite',
    img: coffeComLeite,
    type: 'Tradicional',
    name: 'Café com Leite',
    text: 'Meio a meio de expresso tradicional com leite vaporizado'
  },
  {
    id: 'coffeLatte',
    img: coffeLatte,
    type: 'Tradicional',
    name: 'Latte',
    text: 'Uma dose de café expresso com o dobro de leite e espuma cremosa'
  },
  {
    id: 'capuccino',
    img: capuccino,
    type: 'Tradicional',
    name: 'Capuccino',
    text: 'Bebida com canela feita de doses iguais de café, leite e espuma'
  },
  {
    id: '',
    img: coffeMacchiato,
    type: 'Tradicional',
    name: 'Macchiato',
    text: 'Café expresso misturado com um pouco de leite quente e espuma'
  },
  {
    id: 'coffeMocaccino',
    img: coffeMocaccino,
    type: 'Tradicional',
    name: 'Mocaccino',
    text: 'Café expresso com calda de chocolate, pouco leite e espuma'
  },
  {
    id: 'chocolateQuente',
    img: chocolateQuente,
    type: 'Especial',
    name: 'Chocolate Quente',
    text: 'Bebida feita com chocolate dissolvido no leite quente e café'
  },
  {
    id: 'coffeCubano',
    img: coffeCubano,
    type: 'Especial',
    name: 'Cubano',
    text: 'Drink gelado de café expresso com rum, creme de leite e hortelã'
  },
  {
    id: 'coffeHavaiano',
    img: coffeHavaiano,
    type: 'Especial',
    name: 'Havaiano',
    text: 'Bebida adocicada preparada com café e leite de coco'
  },
  {
    id: 'coffeArabe',
    img: coffeArabe,
    type: 'Especial',
    name: 'Árabe',
    text: 'Bebida preparada com grãos de café árabe e especiarias'
  },
  {
    id: 'coffeIrlandes',
    img: coffeIrlandes,
    type: 'Especial',
    name: 'Irlandês',
    text: 'Bebida a base de café, uísque irlandês, açúcar e chantilly'
  }
]

export function CoffeeList() {
  return (
    <ListaCoffee>
      {coffes.map(coffe => (
        <CoffeeCard>
          <img src={coffe.img}></img>
          <span>{coffe.type}</span>
          <h3>{coffe.name}</h3>
          <p>{coffe.text}</p>
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
      ))}
    </ListaCoffee>
  )
}
