import React from 'react'

const RecipeContent = ({Title, Time, Servings, Ingredients, Instructions}) => {

    const listIngredients = Ingredients.map((item, idx) => (
        <li key={idx}>{item}</li>
    ))

  return (
    <div className='recipe-content'>
        
        <p>Cooking time: {Time} minutes</p>
        <p>{Servings}</p>
        
        <details>
            <summary>Cooking instructions:</summary>
            <p>{Instructions}</p>
        </details>
            
        <details>
            <summary>Ingredients:</summary>
            <ul>
                {listIngredients}
            </ul>
        </details>
      
    </div>
  )
}

export default RecipeContent