import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Loader } from './Loader'

export const Info = ({url}) => {
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

    const {name, description, population} = data

  return (
    <div>
        <p>{name}</p>
        <p>{description}</p>
        <p>Poblacion: </p><span>{population}</span>
    </div>
  )
}

