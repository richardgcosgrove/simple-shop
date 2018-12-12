import React, {Component} from 'react';
// import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import CartItem from './CartItem';
import formatMoney from '../lib/formatMoney';
import PriceTag from './styles/PriceTag';
// import Pagination from './Pagination';
// import {perPage} from '../config';

// const ALL_ITEMS_QUERY = gql `
//   query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
//     items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
//       id
//       title
//       price
//       description
//       image
//       largeImage
//     }
//   }
// `;

const Container = styled.div`
  border: 5px solid black;
  padding: 30px 10px;
  margin-bottom: 10px;
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

const TotalPriceTag = styled(PriceTag)`
  margin-left: auto;
  padding-right: 10px;
`;

class Items extends Component {
  render() {
    return (
      <Container>
        {/* <CartList>
          {this.data
            .items
            .map(item => <CartItem key={item.id} item={item}/>)}
        </CartList>
        <Total>
            <span>Total</span><TotalPriceTag>{formatMoney(this.data.items
                .map(({price}) => price)
                .reduce((current, next) => current + next, 0))
            }</TotalPriceTag>
        </Total> */}
      </Container>
    );
  }
}

export default Items;
// export {ALL_ITEMS_QUERY};