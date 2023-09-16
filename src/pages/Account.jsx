import { useContext } from "react";
import { AppContext } from "../../Context";
import { styled } from "styled-components";
import { RiDeleteBin6Line } from "@react-icons/all-files/Ri/RiDeleteBin6Line";
// import SignIn from "./SignIn";

const Div = styled.div`
display: flex;
margin-left: 4rem;
flex-wrap: wrap;
gap: 4rem;

@media screen and (max-width: 1024px) {
    flex: 33.33%;
    max-width: 33.33%;
  }

  @media screen and (max-width: 767px) {
    flex: 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 480px) {
    margin-left: 2.3rem;
  }
`
const Column = styled.div`
  flex: 25%;
  max-width: 20%;
  position: relative;

  @media screen and (max-width: 1024px) {
    flex: 33.33%;
    max-width: 33.33%;
  }

  @media screen and (max-width: 767px) {
    flex: 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 480px) {
    flex: 100%;
    max-width: 100%;
  }
`
const StyledRiDeleteBin6Line = styled(RiDeleteBin6Line)`
color: #fff;
/* transform: translate(400%,-330%); */
position: absolute;
top: 70px;
left: 8rem;
z-index: 2;
cursor: pointer;
&:hover{
  color: red;

}
`

const Account = () => {
  const { cart , isAuthentication } = useContext(AppContext);
  console.log("cart:", cart); // Add this line to check the value of cart
  const {dispatch}  = useContext(AppContext)
  const removeitem = (movieId)=>{
    dispatch({type: 'REMOVE_FROM_HEART' , payload: movieId})
  }
  console.log(isAuthentication)

  return (
    <>
    {
      (cart.length === 0 ? ( <p style={{textAlign: 'center' , color: '#fff', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '3rem'}}>No Fav Movie</p>):

(<Div>
{cart.map((item) => (
  <Column key={item.id}>
    <img
      src={`https://image.tmdb.org/t/p/w300/${item?.backdrop_path}`}
      alt={item?.title}
    />
    <StyledRiDeleteBin6Line onClick={()=> removeitem(item.id)} size={30} />
  </Column>
))}
</Div>))
    }
    </>
  );
};

export default Account;
