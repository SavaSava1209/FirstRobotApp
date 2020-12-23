import React from 'react';


function Card(props) {
    const {id, email, name} = props;
    return(
        <div className = 'bg-light-pink dib pa2 ma2 tc f7 grow shadow-5'>
            <img alt='robots' src= {`https://robohash.org/${id}`} /> 
            <h2>{name}</h2>
            <p> {email} </p>
        </div>

        )


}


export default Card;