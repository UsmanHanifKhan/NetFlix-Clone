import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context";
import LogOut from "../pages/LogOut";
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 1rem 1rem 0 1rem;
  background: transparent;

  h1 {
    color: red;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 100;
    text-decoration: none;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.$transparent ? "transparent" : "red")};
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0% 0.5rem;
`;

const NetflixFav = styled.div`
  display: flex;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`;


const Navbar = () => {
  const {isAuthentication} = useContext(AppContext)
  return (
    <>
      <Div>
      <StyledLink to='/'><h1>NetFlix</h1></StyledLink>
        <NetflixFav>
          <Link to='/account'> <Button $transparent>Account</Button></Link>
          {
            isAuthentication ? <LogOut/> : (<Link to='/signin'><Button>SignIn</Button></Link>)
          }
          <Link to='/*'></Link> 
          </NetflixFav>
      </Div>
    </>
  );
};

export default Navbar;
