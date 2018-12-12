import React from 'react';
import Items from '../components/Items';
import Cart from '../components/Cart';
import styled from 'styled-components';
import BaseRow from '../components/styles/Row';
import ShopIContext from './state/ShopIState';
import ShopIState from './state/ShopIState';

const Row = styled(BaseRow)`
  width: 100%;
`;

export const ShopContext = React.createContext<any>({});


export default class Shop extends React.Component<any, ShopIState> {
  state = {
    items: []
  };

  addItem = (item) => {
    this.setState({
      items: [...this.state.items, item]
    })
  };
  removeItem = (item) => {
    const index = this.state.items.findIndex(entry => entry === item);
    if (index >= 0) {
      this.setState({
        items: [
          ...this.state.items.slice(0, index),
          ...this.state.items.slice(index+1),
        ]
      });
    }
  }
  render() {    
    return (
      <ShopContext.Provider value={{state: this.state, actions: {addItem: this.addItem, removeItem: this.removeItem}} }>
        <Row>
          <Items />
          <Cart />
        </Row>
      </ShopContext.Provider>
    )
  }
}