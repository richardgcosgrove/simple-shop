import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 4rem;
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  a {
    padding: 0 1rem;
    color: black;
    text-decoration: none;
    font-size: 60px;
  }
  .logo {
    background: black;
    color: white;
    text-transform: lowercase;
    border-radius: 40px;
    width: 80px;
    height: 80px;
    display: inline-flex;
    align-items: flex-end;
    justify-content: center;
    transform: translateY(-15px);
    span {
      transform: translateY(15px);
    }
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
  }
`;


const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a data-cy="header"><span className="logo" data-cy="logo"><span>Cy</span></span>press Store</a>
        </Link>
      </Logo>
    </div>
  </StyledHeader>
);

export default Header;