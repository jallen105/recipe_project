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
        
        <div className='info'>
            <p>Cooking time: {Time} minutes</p>
            <p>{Servings}</p>
        </div>

        
        <div className='instructions'>
        <button 
        onClick={() => setToggleInstructions(!toggleInstructions)} 
        className='show-more-btn'>
            {toggleInstructions ? 'Hide' : 'Show'} Instructions
            </button>
            <p className={toggleInstructions ? 'slide-down' : 'slide-up'} >
                    Cooking instructions: {Instructions}
                    </p>
        </div>
            
        <div className='ingredients'>
        <button 
        onClick={() => setToggleIngredients(!toggleIngredients)} 
        className='show-more-btn'>
            {toggleIngredients ? 'Hide' : 'Show'} Ingredients
            </button>
            <ul className={toggleIngredients ? 'slide-down' : 'slide-up'} >
                {listIngredients}
            </ul>
        </div>
      
    </div>
  )
}

export default RecipeContent