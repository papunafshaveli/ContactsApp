import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Phone Book App</h1>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 50px;

  background-color: grey;

  h1 {
    font-size: 6rem;
  }
`;
