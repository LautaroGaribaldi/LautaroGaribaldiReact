import React from 'react'
import { CardWidget } from '../CardWidget/CardWidget'

export const NavBar = () => {
    const categories =["Placas de Video","Procesadores","MothersBoards"]
  return (
    <div className='navBar'>
        <nav>
                {categories.map((category)=> {
                    return <a href='#' key={category}>{category}</a>;
                })}
        </nav>
        <CardWidget />
    </div>
  )
}
