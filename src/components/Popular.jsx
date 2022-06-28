/* eslint-disable no-template-curly-in-string */
import { useEffect } from "react"



function Popular() {

  useEffect(() => {
    getPopular();
  }, []);


  const getPopular = async () => {
    const api = await fetch(
      'https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_API_KEY_PASS}&number=9'
      )
    const data = api.json()
    console.log(data)
  }
  
  return (
    <div>Popular</div>
  )
}

export default Popular;