import React, {Component} from 'react';
import formatMoney from '../lib/formatMoney';
import styled from 'styled-components';
import BaseItemStyles from './styles/ItemStyles';
import ItemIProps from './props/ItemIProps';
import BaseRow from './styles/Row';
import Column from './styles/Column';
import BaseTitle from './styles/Title';
import BasePriceTag from './styles/PriceTag';
import { ShopContext } from '../pages/shop';

const ItemStyles = styled(BaseItemStyles)`
  img {
    object-fit: cover;
    height: 150px;
    width: 150px;
    border-radius: 125px;
    margin: 10px auto 10px 0;
  }
  .primary {
    background: #98FB98;
    :active {
    background: #68FB68;
    }
  }
`;

const Description = styled.p`
  opacity: 0.8;
  width: 200px;
`;

const Drop = styled.span`
  font-size: 6rem;
  opacity: 0.8;
  margin-left: -11px;
`;

const  Row = styled(BaseRow)`
  padding: 5px 10px;
`;

const Title = styled(BaseTitle)`
  margin-left: 22px;
`;

const PriceTag = styled(BasePriceTag)`
  margin-left: auto;
`;


class Item extends Component<ItemIProps, any> {

  render() {
    const item = this.props.item;
    return (
      <ShopContext.Consumer>
        {value => (
          <ItemStyles>
            <Row>
              {item.image && <img src={item.image} alt={item.title}  data-cy="image
              "/>}
              <Column>
                <Title data-cy="title">{item.title}</Title>
                <Row data-cy="description">
                  <Drop data-cy="drop">"</Drop>
                  <Description>{item.description}</Description>
                </Row>
              </Column>
            </Row>

            <Row className="bottom">
              <button className="primary" onClick={() => { value.actions.addItem(item)}}>Add To Cart</button>
              <PriceTag>{formatMoney(item.price)}</PriceTag>
            </Row>
          </ItemStyles>
        )}
      </ShopContext.Consumer>
    );
  }
}

export default Item;