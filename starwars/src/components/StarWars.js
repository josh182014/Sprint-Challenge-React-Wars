import React from 'react';
import Character from './Character'
// class StarWars extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = props;
//     }


//     render () {
//         console.log('inside StarWars.js', this.state)
//         return (
//             <div>
//                 'test'
//             </div>
//         )
//     }
// }

function StarWars(props) {
    console.log('inside StarWars.js', props)

    if (props.starwarsChars.length > 1) {

        return (
            props.starwarsChars.map(character => (
                <Character character={character} />
            )
        )
        )
    }
    else return 'Loading I guess? IDK'
}

export default StarWars;