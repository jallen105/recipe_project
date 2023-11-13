import React, { useState } from 'react'
import RecipeCards from './RecipeCards'

const Main = ({recipeData}) => {

    let listRecipes = recipeData

    const [searchInput, setSearchInput] = useState("")

    const handleChange = (event) => {
      event.preventDefault()
      setSearchInput(event.target.value)
    }

    if (searchInput.length > 0) {
      listRecipes = listRecipes.filter((recipe) => {
        return recipe.Title.toLowerCase().match(searchInput)
      })
    }

    listRecipes = listRecipes.map((recipe, idx) => (
        <RecipeCards key={idx} recipeData={recipe} />
      ))
  

  return (
    <main>
        <input type='text' placeholder='Search here' onChange={handleChange} value={searchInput} />
        <div className='recipe-container'>
        {
            listRecipes
        }
        </div>
        
    </main>
  )
}

export default Main