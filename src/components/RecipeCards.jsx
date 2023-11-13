import React, { useState } from 'react'
import RecipeContent from './RecipeContent'

const RecipeCards = ({recipeData:{Title, Time, Servings, Ingredients, Instructions, Image}}) => {

    
    const [toggle, setToggle] = useState(false)

  return (
    <div className='recipe-card'>
                
        <h3>{Title}</h3>

        <div className='img-container'>
            <img src={Image} alt={Title}/>
            <button onClick={() => setToggle(!toggle)} className='show-more-btn'>{toggle ? 'Hide' : 'Show'} Recipe</button>
        </div>
        
        {toggle && (<RecipeContent Title={Title} Time={Time} Servings={Servings} Ingredients={Ingredients} Instructions={Instructions} />
        )}
    </div>
  )
}

export default RecipeCards