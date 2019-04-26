import React from 'react'

function Character(props) {
    console.log(props)
    return (
        <div className='characterContainer'>
            {props.character.name}
        </div>
    )
}

export default Character