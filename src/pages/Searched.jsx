import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

const Searched = () => {
  const params = useParams();
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const getSearched = async (name) => {
    console.log(process.env.REACT_APP_KEY_API,"search")
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY_API}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
  <Grid>
    {searchedRecipes.map((item)=>{
      return(
        <Card id={item.id}>
          <img src={item.image} alt="" />
          <h4>{item.title}</h4>
        </Card>
      )
    })}
  </Grid>
  )
};
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 2fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Searched;
