import React, { useState } from 'react'

const OnOffButton = () => {
    const [toggleButton,setToggleButton] = useState(true)

    const toggleClick = () => {
        setToggleButton(!toggleButton);
    }
  return (
    <div>
            <button type='button' onClick={()=>toggleClick()}>{toggleButton ? "ON":"OFF" }</button>
    </div>
  )
}

export default OnOffButton