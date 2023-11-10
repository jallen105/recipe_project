import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import RecipeData from './data.json'

function App() {

  const listRecipes = RecipeData.map((recipe, idx) => (
    <Main key={idx} recipeData={recipe} />
  ))


  return (
    <div>
      <Header />
      <main>
        {listRecipes}
      </main>
      <Footer />
    </div>
  )
}

export default App
