import React, {Component} from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import formatMoney from '../lib/formatMoney';
import { ShopContext } from '../pages/shop';

const Container = styled.div`
  border: 5px solid black;
  padding: 30px 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 300px;
`;

const Total = styled.div `
  padding: 5px 10px;
  border-top: 1px solid black;
  margin-top: 20px;
  font-size: 2rem;
  display: flex;
  flex-wrap: wrap;
`;

const CartList = styled.div `
  margin-left: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  max-width: ${props => props.theme.maxWidth};
`;

const TotalPriceTag = styled.p`
  font-size: 2rem;
  justify-self: right;
  align-self: flex-end;
  margin-top: auto;
  padding-right: 10px;
  margin-left: auto;
  padding-right: 10px;
`;

class Items extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {value => (
          <Container>
            <CartList>
              {value
                .state
                .items
                .map(item => <CartItem key={item.id} item={item}/>)}
            </CartList>
            <Total>
                <span>Total</span><TotalPriceTag>{formatMoney(value.state.items
                    .map(({price}) => price)
                    .reduce((current, next) => current + next, 0))
                }</TotalPriceTag>
            </Total>
          </Container>
          )
        }
      </ShopContext.Consumer>
    );
  }
}

export default Items;