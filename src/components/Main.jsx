import React, { useState } from 'react'

const Main = ({recipeData:{Title, Time, Serivings, Ingredients, Instructions, Image}}) => {

    const listIngredients = Ingredients.map((item, idx) => (
        <li key={idx}>{item}</li>
    ))
    
    const [toggle, setToggle] = useState(true)

  return (
    <div>
                
        <h2>{Title}</h2>

        <div onClick={() => setToggle(!toggle)} className='img-container'>
            <img src={Image} alt={Title}/>
            <button>Show Recipe</button>
        </div>
        
        {!toggle && (<div>
            <ul>
                {listIngredients}
            </ul>
        </div>
        )}
    </div>
  )
}

export default Main