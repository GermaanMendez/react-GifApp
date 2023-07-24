import React, { useState } from 'react'
import { AddCategory,GifGrid } from './components';


export const GiftExpertApp = () => {
    //Debo utilizar un hook que controle el estado para saber si ocurren cambios
    const [categories, setCategories] = useState(['The Simpsons'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory))return//Si la categoria ya existe en la lista actual no lo agrega
        setCategories([newCategory,...categories]);
    }


  return (
      <>
          {/* Titulo */}
          <h1>App Gifts By Germán Méndez</h1>
          
          {/* Input para busqueda */}
          <AddCategory
              //Esto es una Propiedad de mi componente
              //LLamo al componente pasandole como propiedad la funcion que se encarga de agregar la nueva categoria
              //Entonces el componente hara el callback retornando el valor a agregar es decir la propeidad value que ahora es nula tomara el valor que ingreso el usuario
                onNewCategory={(value) =>onAddCategory(value)}
          />
          

          {/* Listado de Gifs */}
              {categories.map(category => {
                  return (
                    <GifGrid key={category} category={category}/>
                  )
              })}
               {/* Gif Item */}
      </>
  )
}

export default GiftExpertApp