import React from 'react'
import RecipeContent from './RecipeContent'

const RecipeCards = ({recipeData:{Title, Time, Servings, Ingredients, Instructions, Image}, index:{count}}) => {

  let evenOdd;

  if ( (count % 2) === 0) {
    evenOdd = 'even'
  } else {
    evenOdd = 'odd'
  }
  

  return (
    <div className={`${evenOdd} recipe-card`}>
                
        <h3>{Title}</h3>

        <RecipeContent 
        Title={Title} 
        Time={Time} 
        Servings={Servings} 
        Ingredients={Ingredients} 
        Instructions={Instructions} 
        Image={Image} 
        />
        
        
    </div>
  )
}

export default RecipeCards