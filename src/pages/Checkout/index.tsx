import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money
} from 'phosphor-react'
import {
  CheckoutContainer,
  DivLeft,
  ItemsSapan,
  DivAddress,
  Form,
  DivPayments,
  Buttons
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h3>Complete seu pedido</h3>
        <DivLeft>
          <DivAddress>
            <ItemsSapan itemsColor="yellowDark">
              <MapPinLine size={22} />
              <label>Endereço de entrega</label>
            </ItemsSapan>
            <p>Informe o endereço onde deseja receber seu pedido</p>
            <Form action="">
              <input type="cep" id="cep" placeholder="CEP" />
              <input type="text" id="rua" placeholder="Rua" />
              <section>
                <input type="text" id="numero" placeholder="Número" />
                <input type="text" id="complemento" placeholder="Complemento" />
              </section>
              <section>
                <input type="text" id="bairro" placeholder="Bairro" />
                <input type="text" id="Cidade" placeholder="Cidade" />
                <input type="text" id="uf" placeholder="UF" />
              </section>
            </Form>
          </DivAddress>
          <DivPayments>
            <ItemsSapan itemsColor="purple">
              <CurrencyDollar size={22} />
              <label>Pagamento</label>
            </ItemsSapan>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
            <Buttons>
              <button>
                <CreditCard size={16} />
                <label>cartão de crédito</label>
              </button>
              <button>
                <Bank size={16} />
                <label>cartão de débito</label>
              </button>
              <button>
                <Money size={16} />
                <label>dinheiro</label>
              </button>
            </Buttons>
          </DivPayments>
        </DivLeft>
      </div>
      <div>
        <h3>Cafés selecionados</h3>
      </div>
    </CheckoutContainer>
  )
}
