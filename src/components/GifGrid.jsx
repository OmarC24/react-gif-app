import { useEffect, useState } from "react"
import { GifItem } from "./GifItem"

import { useFetchGifs } from "../hooks/useFetchGifs"
import { getGifs  } from "../helpers/getGifs"



export const GifGrid = ({ category }) => {


    const {images, isLoading} = useFetchGifs( category )


        
  return (
    <>

        <h3>{ category }</h3>
        <div className="card-grid">

            {
                isLoading && (<h3>Cargando...</h3>)
            
                

            }
            
            
        {
            images.map( (image) => (
                <GifItem 
                        
                    key={image.id}
                     //title={image.title}
                    //url={image.url}
                    {...image}

                />
            ))
        }
        </div>
        
    </>
  )
}
