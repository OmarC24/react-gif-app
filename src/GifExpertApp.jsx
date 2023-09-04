import { useState } from "react"
import { AddCategory, GifGrid } from "./components"



export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])
    
    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory.trim())) return;
        setCategories([newCategory, ...categories])
    }


  return (
    <>
        <h1>Gif App</h1>

        <AddCategory 
        
          onNewCategory={ onAddCategory }
        />

        

        
        {categories.map((category, index) => (
        
          <GifGrid key={category} category={category}/>
        
        ))}
        
    </>
  )
}
