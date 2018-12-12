import styled from 'styled-components';

export default styled.div`
  border: 1px solid black;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  border-radius: 8px;
  position: relative;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  img {
    object-fit: cover;
    height: 150px;
    width: 150px;
    border-radius: 125px;
    margin: 10px auto 10px 20px;
  }
  button {
    height: 48px;
    width: 128px;
    border-radius: 18px;
    border-width: 0;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    :active {
      box-shadow: inset 0 3px 1px -2px rgba(0,0,0,.2), inset 0 2px 2px 0 rgba(0,0,0,.14), inset 0 1px 5px 0 rgba(0,0,0,.12);
    }
  }
  .bottom {
    margin-top: auto;
  }
`;