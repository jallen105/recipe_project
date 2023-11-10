import './App.css'
import React, {useState} from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import RecipeData from './data.json'

function App() {

  let listRecipes = RecipeData
    const [searchInput, setSearchInput] = useState("")

    const handleChange = (event) => {
      event.preventDefault()
      setSearchInput(event.target.value)
    }

    if (searchInput.length > 0) {
      listRecipes = RecipeData.filter((recipe) => {
        return recipe.Title.toLowerCase().match(searchInput)
      })
    }
  
  listRecipes = listRecipes.sort((a, b) => {
    const titleA = a.Title.toUpperCase()
    const titleB = b.Title.toUpperCase()
    if (titleA < titleB) {
      return -1
    }
    if (titleA > titleB) {
      return 1
    }

    return 0
  })

  listRecipes = listRecipes.map((recipe, idx) => (
    <Main key={idx} recipeData={recipe} />
  ))


  return (
    <div>
      <Header />
      <main>
        <input type='text' placeholder='Search here' onChange={handleChange} value={searchInput} />
        {listRecipes}
      </main>
      <Footer />
    </div>
  )
}

export default App
