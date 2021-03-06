import React, {Component} from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';

const ALL_ITEMS_QUERY = gql `
  query ALL_ITEMS_QUERY {
    items(orderBy: createdAt_DESC) {
      id
      title
      price
      description
      image
    }
  }
`;

const Center = styled.div `
  margin: 0 auto;
`;

const ItemList = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

class Items extends Component {
  render() {
    return (
      <Center>
        <Query query={ALL_ITEMS_QUERY} >
          {({data, error, loading}) => {
            if (loading) 
              return <p>Loading...</p>;
            if (error) 
              return <p>Error: {error.message}</p>;
            return <ItemList data-cy="items">
              {data
                .items
                .map(item => <Item key={item.id} item={item}/>)}
            </ItemList>
          }}
        </Query>
      </Center>
    );
  }
}

export default Items;
// export {ALL_ITEMS_QUERY};