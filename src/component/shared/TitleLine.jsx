import React from 'react'

export default function TitleLine({linecolor}) {
  const myStyle = {
    color: (linecolor == 'white')? 'white' : '#2C3E50'
  }
  let myClass = ' text-white fs-3 star-icon';
  if (linecolor != 'white'){
    myClass += ' bg-bluea bg-blueb';
  
  }
  
  return (
    <>
        <div className='d-flex justify-content-center'>
        <div  className={myClass}  ><i style={myStyle} class="fa-solid fa-star"></i></div>
        </div>

    </>
  )
}
