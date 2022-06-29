import { useEffect } from "react"

function Popular() {

  useEffect(() => {
    getPopular();
  },[]);


  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=3d31646544a94c96bf5df39f618e1bfc&number=9`
      )
    const data = api.json()
    console.log(data)
  }
  
  return (
    <div>Popular</div>
  )
}

export default Popular;