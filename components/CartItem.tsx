import React, {Component} from 'react';
import formatMoney from '../lib/formatMoney';
import styled from 'styled-components';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import Row from './styles/Row';
import Column from './styles/Column';
import ItemIProps from './props/ItemIProps';

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
      <ItemStyles>
        <Row>
          <Column>
            <Title>{item.title}</Title>

            <PriceTag>{formatMoney(item.price)}</PriceTag>

          </Column>
        </Row>

        <div className="buttonList">
          <DeleteItem id={item.id}>Delete from Cart</DeleteItem>
        </div>
      </ItemStyles>
    );
  }
}

export default CartItem;