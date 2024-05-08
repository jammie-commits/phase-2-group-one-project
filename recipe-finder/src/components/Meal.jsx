import React, { useState , useEffect} from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

const Meal=()=>{
    const[url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const[item,setItem]=useState();
    const[show,setShow]=useState(false);
    const [search,setSearch]=useState("")
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meals);
            setItem(data.meals);
            setShow(true);
        })
    },[url])
