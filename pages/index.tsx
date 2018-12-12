import React from 'react';
import Items from '../components/Items';
import Cart from '../components/Cart';
import styled from 'styled-components';
import BaseRow from '../components/styles/Row';

const Row = styled(BaseRow)`
  width: 100%;
`;

export default class extends React.Component {
  render() {    
    return (
      <Row>
        <Items />
        <Cart />
      </Row>
    )
  }
}