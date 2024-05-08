import React from 'react'

const RecipeInfo=()=> {
    const [item,setItem]=useState();
    const {MealId}=useParams();
  
    if(MealId!=="")
    {
       fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
       .then(res=>res.json())
       .then(data=>{
        setItem(data.meals[0])
       })
    }
}
    export default RecipeInfo