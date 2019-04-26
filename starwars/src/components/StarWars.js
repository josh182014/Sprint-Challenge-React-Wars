import React from 'react';
import Character from './Character'

function StarWars(props) {
    if (props.starwarsChars.length > 1) {

        return (
            props.starwarsChars.map(character => (
                <Character character={character} key={character.created}/>
            )
        )
        )
    }
    else return 'Loading I guess? IDK'
}

export default StarWars;