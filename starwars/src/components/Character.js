import React from 'react'

function Character(props) {

    function toggle() {
        let hideContainer = document.querySelectorAll('.more-info-container');
        Array.from(hideContainer).forEach(function(x){
          x.classList.toggle('hidden')
        });
    }
    return (
        <div className='characterContainer'>
            <div><strong>{props.character.name}</strong></div>
            <button onClick={toggle} className='toggle'>More Info</button>
            <div className='more-info-container hidden'>
                <div id='more-info' className='more-info'>
                    <strong>Year Born: </strong> {props.character.birth_year}
                </div>
                <div className='more-info'>
                <strong>Homeworld: </strong> <a> {props.character.homeworld} </a>
                </div>
                <div className='more-info'>
                <strong>Gender: </strong> <a> {props.character.gender} </a>
                </div>
                <div className='more-info'>
                <strong>Height: </strong> <a> {props.character.height} </a>
                </div>
            </div>
        </div>
    )
}

export default Character