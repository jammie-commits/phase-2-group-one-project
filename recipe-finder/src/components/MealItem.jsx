import React from 'react'
import { useNavigate } from 'react-router-dom'
const MealItem =((data) =>{
    console.log(data)
});
let navigate =useNavigate();

function MealItem() {
  return (
    <>
    {
        (!data)?"Not Found" :data.map(item =>{
            
        })
    }
    </>
  )
}

export default MealItem