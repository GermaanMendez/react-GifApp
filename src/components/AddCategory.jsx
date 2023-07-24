import React,{useState} from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (evento) => {
        setInputValue(evento.target.value);
    }

    const onSubmit = (evento) => {
        evento.preventDefault();//Quito la actualicacion de la pagina
        if (inputValue.trim().length <= 1) return;//me salgo si es un espacio vacio
        onNewCategory(inputValue.trim())//Hago el callback pasandole el nuevo dato
        setInputValue('');
    }

    return (
      <form onSubmit={(evento)=>onSubmit(evento)}>
          <input
                type='text'
                placeholder='Search Gifs'
                value={inputValue}
                onChange={(evento) => onInputChange(evento)}
                //Este atributo es necesario para que react sepa cuando hay un cambio
                 //Y de esa forma lograr trabajar con el camhio por ejemplo lo que ingresa el usuairo en el input
                 //Es algo dinamico y cambiante por lo tanto tengo que saber cuando cambia
            /> 
      </form>
      )
}

