"use client"

import React from 'react'
import { useState } from 'react'


export default function DropDown({filmsArray, pickedMovie, setPickedMovie}) {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
      setIsOpen((prev)=>!prev)
    }

    const handePickedMovie = (data) => {
      setPickedMovie(data)
      handleOpen()
    }
  return (
    <div>
        <button onClick={handleOpen}>{pickedMovie.title}</button>
        <div style={{display: isOpen ? "block":"none"}}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li onClick={()=>handePickedMovie({title: "All"})}>
                <p >All</p>
            </li>
            {filmsArray.map(film=>(<li key={film.title} onClick={()=>handePickedMovie(film)}>
                <p  >{film.title}</p>
            </li>))}
 
            </ul>
        </div>
</div>
  )
}
