import { useContext } from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import { AppContext } from "../../Context";
const Home = () => {
  const API_KEY = '5eae00d436dcadbfea72517ca09fe60a';

  const {region} = useContext(AppContext)
  console.log(region)

const requests = {
    requestUpcoming: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_origin_country=${region}&page=1`,
    requestPopular: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_origin_country=${region}&page=5`,
    requestTopRated: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_origin_country=${region}&page=6`,
    requestTrending: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_origin_country=${region}&page=9`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_origin_country=${region}&page=7`,
}
  return (
    <>
      <Main /> 
      <Row rowId={1} title='Up Coming' fetchUrl={requests.requestUpcoming} />
      <Row rowId={2} title='Popular' fetchUrl={requests.requestPopular} />
      <Row rowId={3} title='Trending' fetchUrl={requests.requestTrending} />
      <Row rowId={4} title='Top Rated' fetchUrl={requests.requestTopRated} />
      <Row rowId={5} title='Horror' fetchUrl={requests.requestHorror} /> 
      
    </>
  );
}

export default Home;
