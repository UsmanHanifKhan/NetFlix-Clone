import axios from "axios";
import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import { AiOutlineHeart } from "@react-icons/all-files/Ai/AiOutlineHeart";
import { MdChevronLeft } from  '@react-icons/all-files/Md/MdChevronLeft'
import { MdChevronRight } from  '@react-icons/all-files/Md/MdChevronRight'
import { AppContext } from "../../Context";

// Css Styling With Styled Components Start

//Styled The Parent Div
const Div = styled.div`
display: flex;
flex-direction: row;
overflow-x: auto;
scroll-behavior: smooth;
white-space: nowrap;
position: relative;
margin-left: 1rem;
&::-webkit-scrollbar {
    width: 0; /* Chrome, Safari, Opera */
  }
`
//Styled The Child Div
const StyledDiv = styled.div`
display: flex;
justify-content: center;
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
background:rgba(0,0,0,0.5);
z-index: 1;
transition: opacity 0.3s ease;
opacity: 0;
cursor: pointer;
&:hover{
  opacity: 1;
  p{
    opacity: 1;
  } 
}
  `
const Divs = styled.div`
margin-left: 2rem;
position: relative;
`

//Styled The Icon 
const StyledDivIcon = styled.div`
position: absolute;
top: 0;
left: 0;
color: red;
font-size: 2rem;
  filter: brightness(70%);
&:hover{
  filter: brightness(100%);
}
`
//Styled The Paragraph Using Styled Components
const StyledPara= styled.p`
color: #fff;
  font-size: 1rem;
  position: absolute;
  z-index: 2;
  top: 5rem;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  &:hover{
    color: red;
    transition: 0.5s;
  }
`
const StyledMdChevronLeft = styled(MdChevronLeft)`
color: #fff;
border-radius: 5rem;
background: transparent;
position: absolute;
left: 0;  
margin-top: 4rem;
cursor: pointer;
opacity: 20%;
z-index: 3;
&:hover{
  background: #fff;
  color: #000;
  opacity: 100;
}
@media screen and (max-width: 667px){
  display: none;
}
`
const StyledMdChevronRight = styled(MdChevronRight)`
color: #fff;
cursor: pointer;
background: transparent;
border-radius: 5rem;
opacity: 20%;
position: absolute; 
transform: translate(-20%,-312%);
right: 0;
z-index: 3;
&:hover{
  background: #fff;
  color: #000;
  opacity: 100;
}

@media screen and (max-width: 667px){
  display: none;
}
`

//Css Styling With Styled Components End








const Row = ({ title , fetchUrl , rowId}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(fetchUrl);
        setMovies(res.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchUrl]);


  const slideLeft = ()=>{
    var slider = document.getElementById('slider' + rowId)
    slider.scrollLeft -= slider.offsetWidth //- 500;
  }
  
  var slideRight = ()=>{
    const slider = document.getElementById('slider' + rowId)
    slider.scrollLeft += slider.offsetWidth //+ 500;
  }

  const { dispatch } =   useContext(AppContext)

  const addtomovie = (data)=>{
    dispatch({type: 'ADD_TO_MOVIE' , payload: data})
    console.log(data)
  }

  return (
    <>
      <h2 style={{ color: "#fff", padding: "5rem 1rem" , fontFamily:' Arial, Helvetica, sans-serif' }}>{title}</h2>
      <StyledMdChevronLeft onClick={slideLeft} size={40}/>
      <Div id={'slider' + rowId}>

    {/* Map Methode */}

      {movies.map((data) => (
        <>
        <Divs key={data.id}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${data?.backdrop_path}`}
          alt={data.orignal_title}
          key={data.id}
        />
       <StyledDiv>
       <StyledDivIcon><AiOutlineHeart onClick={()=> addtomovie(data)}/></StyledDivIcon>
       <StyledPara>{data.title}</StyledPara>
       </StyledDiv>
        </Divs>
        </>
      ))}
      </Div>
      <StyledMdChevronRight onClick={slideRight} size={40} />
    </>
  );


};

//Its PropTypes
Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchUrl: PropTypes.string.isRequired,
  rowId: PropTypes.number.isRequired,
};

export default Row;
