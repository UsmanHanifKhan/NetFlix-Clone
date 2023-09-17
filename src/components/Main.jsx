import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { styled } from "styled-components"
import { AppContext } from "../../Context"



// Css Styling With Styled Components Start

//Style The Parent Div
const Div = styled.div`
width: 100%;
height: 70vh;
img{
    width: 100%;
    height: 90%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    object-fit: cover;

    @media screen and (max-width:667px){
        object-fit: cover;
    }
}
`
//This StyledDiv is Styled For Overlay 
const StyledDiv = styled.div`
position: absolute;
width: 100%;
height: 90%;
top: 0;
left: 0;
background: linear-gradient(to left , rgba(0,0,0,0.01), #000);
z-index: -1;
`
//StyledDivButton is Parent Div of the Buttons
const StyledDivButton = styled.div`
position: absolute;
top: 12rem;
margin-left: 1rem;
`
//Style The Button And Passing The Props To Styled Them
const Button = styled.button`
padding: 0.5rem 1.5rem;
border: 1px solid #fff;
background: ${(props)=> (props.$transparent ? "transparent" : "#fff")};
color: ${(props)=> (props.$white ? "white" : "#000") };
margin-left: ${(props) => (props.$btn ? "1rem" : "none")};
font-weight: 600;
cursor: pointer;
`
//Styled the Paragraph and Passing the props to Styled Them
const Para = styled.p`
color: #fff;
width: 40rem;
font-family: Arial, Helvetica, sans-serif;
font-size: ${(props)=> props.$title ? "2rem" : "none"};
padding-bottom: ${(props)=> props.$title ? "0.5rem" : "" };
color: ${(props)=> props.$release ? "rgb(102, 102, 102)" : ""};
font-weight: ${(props)=> props.$release ? "500" : ""};
padding-top: ${(props)=> props.$release ? "1rem" : ""};
@media screen and (max-width:667px){
    width: 20rem;
    
}
`
//Css Styling With Styled Components End









const Main = () => {
    const {region} = useContext(AppContext)
    const [movies , setMovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length )]
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                
  const API_KEY = '5eae00d436dcadbfea72517ca09fe60a';
                const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_origin_country=${region}&page=4`)
                setMovies(res.data.results)
                // setMovies(`https://image.tmdb.org/t/p/original/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg`)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])
    const truncateString = (str , num)=>{
        if(str?.length > num){
            return str.slice(0 ,num) + '...'
        }
        else{
            return str
        }  }
  return (
    <>
    <Div>
    <StyledDiv></StyledDiv>
    <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
    </Div>
      <StyledDivButton>
        <Para $title>{movie?.title}</Para>
        <Button>Play</Button>
        <Button $transparent $white $btn>Watched</Button>
        <Para $release >Release: {movie?.release_date}</Para>
        <Para>{truncateString(movie?.overview , 150)}</Para>
      </StyledDivButton>
    </>
  )
}

export default Main



// https://image.tmdb.org/t/p/original${data[0].poster_path}
// https://api.themoviedb.org/3/movie/popular?api_key=5eae00d436dcadbfea72517ca09fe60a