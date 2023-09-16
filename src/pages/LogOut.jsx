import { useContext } from "react";
import { styled } from "styled-components";
import { AppContext } from "../../Context";

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

const LogOut = () => {

    const {logOut} = useContext(AppContext)
    const handleLogout = ()=>{
        logOut()
    }
  return (
    <div>
    <Button onClick={handleLogout}>LogOut</Button>
    </div>
  )
}

export default LogOut
