import { useState,useEffect } from "react"
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages);
        setIsLoading(false);
    }

    //#region ExplicacionUseEffect
    //Esto hace que solo se obtengan las imagenes la primera vez, cuando es creado el componente
    //Cuando hay algun cambio ejemplo se inserta otra palabra para buscar gifs
    //No se ejecuta el getImagenes porque el componente ya existe entonces asi logramos
    //Que solo se haga la busqueda del nuevo componente que se esta creando al buscar un nuevo gifs
    //De esta forma no se acumulan las llamadas. En mi app tengo un conjunto de GifGrirds los cuales son componentes del mismo tipo pero uno independiente del otro o sea para la busqueda goku tendre un componente gifGrid, para la busqueda homero tendre otro componente y asi sucesivamente como tantas busquedas tenga
    //#endregion 
    useEffect(() => {
        getImages();
    },[])
    

 return {
     images: images,
     isLoading:isLoading,
  }
}
