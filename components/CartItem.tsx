import React, {Component} from 'react';
import formatMoney from '../lib/formatMoney';
import styled from 'styled-components';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import Row from './styles/Row';
import Column from './styles/Column';
import ItemIProps from './props/ItemIProps';
import { ShopContext } from '../pages/shop';



const DeleteItem = styled.button`
  background-color: #FFE0E0;
  :active {
    background-color: #FFA0A0;
  }
`;


class CartItem extends Component<ItemIProps, any> {

  render() {
    const item = this.props.item;
    return (
      <ShopContext.Consumer>
        {value => (
          <ItemStyles>
            <Row>
              <Column>
                <Title data-cy="cart-item-title">{item.title}</Title>

                <PriceTag data-cy="cart-item-price">{formatMoney(item.price)}</PriceTag>

              </Column>
            </Row>

            <div className="buttonList">
              <DeleteItem id={item.id} data-cy='remove-from-cart' onClick={() => value.actions.removeItem(item)}>Delete from Cart</DeleteItem>
            </div>
          </ItemStyles>
        )}
      </ShopContext.Consumer>
    );
  }
}

export default CartItem;