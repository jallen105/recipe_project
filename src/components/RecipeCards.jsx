import React, { useState } from 'react'
import RecipeContent from './RecipeContent'

const RecipeCards = ({recipeData:{Title, Time, Servings, Ingredients, Instructions, Image}}) => {

    
    const [toggle, setToggle] = useState(true)

  return (
    <div>
                
        <h2>{Title}</h2>

        <div onClick={() => setToggle(!toggle)} className='img-container'>
            <img src={Image} alt={Title}/>
            <button>Show Recipe</button>
        </div>
        
        {!toggle && (<RecipeContent Title={Title} Time={Time} Servings={Servings} Ingredients={Ingredients} Instructions={Instructions} />
        )}
    </div>
  )
}

export default RecipeCards