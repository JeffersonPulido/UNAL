import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { Loader } from './Loader';

export const SelectList = ({ handleChange, title, url }) => {

    const key = `select-${title}`;
    const label = title.toUpperCase();

    const {data, error, loading} = useFetch(url)

    if (!data) {
        return null
    }

    if(loading){
        return <Loader/>
    }

    if (error) {
        return (
            <p>Ha ocurrido un error: {error}</p>
        )
    }

    let options = data;

  return (
    <div>
        <label htmlFor={key}>{label}</label><br />
        <select name={key} id={key} onChange={handleChange}>
            <option value="">Selecciones un {title}</option>
            {
                data && options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))
            }
        </select>
    </div>
  )
}

