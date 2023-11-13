import './App.css'
import React, {useState} from 'react'
import Header from './components/Header'
import Main from './components/Main'
import RecipeData from './data.json'

function App() {

  RecipeData.sort((a, b) => {
    const titleA = a.Title.toUpperCase()
    const titleB = b.Title.toUpperCase()
    if (titleA < titleB) {
      return -1
    }
    if (titleA > titleB) {
      return 1
    }
  })

  return (
    <>
      <Header />
      <Main recipeData={RecipeData} />
    </>
  )
}

export default App
