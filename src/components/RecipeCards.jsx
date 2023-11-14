import React from 'react'
import RecipeContent from './RecipeContent'

const RecipeCards = ({recipeData:{Title, Time, Servings, Ingredients, Instructions, Image}}) => {


  return (
    <div className='recipe-card'>
                
        <h3>{Title}</h3>

        <RecipeContent Title={Title} Time={Time} Servings={Servings} Ingredients={Ingredients} Instructions={Instructions} Image={Image} />
        
        
    </div>
  )
}

export default RecipeCards