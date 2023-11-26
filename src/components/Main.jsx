import React, { useState } from 'react'
import RecipeCards from './RecipeCards'

const Main = ({recipeData}) => {

    let listRecipes = recipeData
    let count = 0

    const [searchInput, setSearchInput] = useState("")

    const handleChange = (event) => {
      event.preventDefault()
      setSearchInput(event.target.value)
    }

    if (searchInput.length > 0) {
      listRecipes = listRecipes.filter((recipe) => {
        return recipe.Title.toLowerCase().match(searchInput.toLowerCase())
      })
    }

    listRecipes = listRecipes.map((recipe, idx) => (
        count+=1,
        <RecipeCards key={idx} recipeData={recipe} index={{count}} />
      ))
  

  return (
    <main>
        <div className='searchbar'>
            <input type='text' placeholder='Search here' onChange={handleChange} value={searchInput} />
        </div>
        
        <div className='recipe-container'>
        {
            listRecipes
        }
        </div>
        
    </main>
  )
}

export default Main