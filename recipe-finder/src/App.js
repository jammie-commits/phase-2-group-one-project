import React from 'react';
import {Routes,Route } from 'react-router-dom';
import Meal from './components/Meal';
import RecipeInfo from './components/RecipeInfo';
import './/App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Meal/>}/>
      <Route path="/:MealId" element={<RecipeInfo/>}/>
     </Routes>
    </>
  )
}

export default App;