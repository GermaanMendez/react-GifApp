import React, { useEffect, useState } from 'react'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export function GifGrid({ category }) {

    const {images, isLoading} = useFetchGifs(category)

  return (
      <>
          <h3>{category}</h3>
          {//esto funciona como un if, si isLoading es true ejecuta lo que esta a la derecha del &&
              isLoading && (<div className='loading'></div>)
          }
          
          <div className='card-grid'>{/* className='card-grida' */}
              {images.map(img => {
                return(
                    <GifItem key={img.id} img={img} />
                      )
              })}
          </div>
      </>
  )}

export default GifGrid