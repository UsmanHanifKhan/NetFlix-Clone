import { styled } from "styled-components";
import { AiFillHeart } from "@react-icons/all-files/Ai/AiFillHeart";
import { Link } from "react-router-dom";
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
const StyledAiFillHeart = styled(AiFillHeart)`
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  color: #fff;
  margin-right: 1rem;
  cursor: pointer;
  :hover{
    transition: 1s;
    color: red;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <>
      <Div>
      <StyledLink to='/'><h1>NetFlix</h1></StyledLink>
        <NetflixFav>
        <Link to="/fav"><StyledAiFillHeart /></Link>
        
          {/* <Fav /> */}
          <Button $transparent>SignIn</Button>
          <Button>SignUp</Button>
          </NetflixFav>
      </Div>
    </>
  );
};

export default Navbar;
