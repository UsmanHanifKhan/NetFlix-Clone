import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5eae00d436dcadbfea72517ca09fe60a&language=en-US`
      );
      setDetails(res.data);
      //   console.log(res.data)
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };
  console.log(details);

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <>
      {
        <Conatiner>
          <img
            src={`https://image.tmdb.org/t/p/original/${details?.backdrop_path}`}
            alt=""
          />
          <div className="details_row">
            <div className="row">
              <div className="div rows">
                <h1>{details.original_title}</h1>
                <p>popularity: <span>{details.popularity}</span></p>
                <p>Budget: <span>{details.budget}</span></p>
                <p>imdb_id: <span>{details.imdb_id}</span></p>
                <p>original_language: <span>{details.original_language}</span></p>
                <p>Status: <span>{details.status}</span></p>
                <p>release_date: <span>{details.release_date}</span></p>
                <p>revenue: <span>{details.revenue}</span></p>
                <p>runtime: <span>{details.runtime}</span></p>
                <p>tagline: <span>{details.tagline}</span></p>
                <p>vote_average: <span>{details.vote_average}</span></p>
                <p>vote_count: <span>{details.vote_count}</span></p>
                <br />
                {/* <h3>Companies</h3>
 {details.production_companies.map((company) => (
          <li key={company.id}>
            {company.name} ({company.origin_country})
          </li>
        ))} */}
              </div>
              <div className="col">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${details?.poster_path}`}
                  alt=""
                />
              </div>
            </div>
            <div className="overview">
            <h1 style={{color:'red'}} >Overview</h1>
          <p style={{color:'silver'}}>{details.overview}</p>
            </div>
            
          </div>
          
        </Conatiner>
      }
    </>
  );
};

const Conatiner = styled.div`
font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  img {
    max-width: 100%;
    max-height: 80vh;
    z-index: -1;
    border: 1px solid #fff;
    border-radius: 5px;
  }
  .details_row {
    padding-top: 4rem;
    .row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      color: #fff;
      gap: 10rem;
      .rows{
        p{
            padding-top: 1.2rem;
            font-weight: 600;
            color: red;
            span{
                color: silver;
                font-weight: 200;
            }
        }
      }
    }
  }
  .overview{
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    p{
        
    width: 80%;
    }
  }
`;

export default Details;

//  <p style={{color:'red'}}>{details.original_title}</p>
// <img src={`https://image.tmdb.org/t/p/w300/${details?.backdrop_path}`} alt="" />
