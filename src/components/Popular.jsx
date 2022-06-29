import { useEffect, useState } from "react"

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  },[]);


  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=3d31646544a94c96bf5df39f618e1bfc&number=9`
      )
    const data = await api.json()
    setPopular(data.recipes);

    console.log(setPopular)
  };
  
  return (
  <div>

    {popular.map((recipe) => {
      return(
        <div>
          <p>{recipe.title}</p>
        </div>
      );
    })} 
  </div>
  );
}

export default Popular;