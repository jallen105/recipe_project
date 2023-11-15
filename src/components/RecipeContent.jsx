import React, { useState } from 'react'

const RecipeContent = ({Title, Time, Servings, Ingredients, Instructions, Image}) => {

    const listIngredients = Ingredients.map((item, idx) => (
        <li key={idx}>{item}</li>
    ))

    const [toggleInstructions, setToggleInstructions] = useState(false)
    const [toggleIngredients, setToggleIngredients] = useState(false)

  return (
    <div className='recipe-content'>

        <div className='img-container'>
            <img src={Image} alt={Title}/>
        </div>
        
        <div>
            <p>Cooking time: {Time} minutes</p>
            <p>{Servings}</p>
        </div>

        
        <div>
        <button 
        onClick={() => setToggleInstructions(!toggleInstructions)} 
        className='show-more-btn'>
            {toggleInstructions ? 'Hide' : 'Show'} Instructions
            </button>
            <p className='slide' 
            style={{
                visibility: toggleInstructions ? 'visible' : 'hidden', 
                opacity: toggleInstructions ? 1 : 0, 
                maxHeight: toggleInstructions ? '300px' : '0' }}
                >
                    Cooking instructions: {Instructions}
                    </p>
        </div>
            
        <div>
        <button 
        onClick={() => setToggleIngredients(!toggleIngredients)} 
        className='show-more-btn'>
            {toggleIngredients ? 'Hide' : 'Show'} Ingredients
            </button>
            <ul 
            className='slide' 
            style={{ visibility: toggleIngredients ? 'visible' : 'hidden', opacity: toggleIngredients ? 1 : 0, maxHeight: toggleIngredients ? '300px' : '0' }}
            >
                {listIngredients}
            </ul>
        </div>
      
    </div>
  )
}

export default RecipeContent