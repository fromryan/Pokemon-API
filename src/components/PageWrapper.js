import React, { useState }  from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';



const PageWrapper = () => {
    const [state, setState] = useState([])

    const onClickHandler = (e) => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            return response.json();
        })
        .then(response => {
            setState(
                response.results
            )
            console.log(response.results);
        })
        .catch(err=>{
            console.log(err);
        });
    }

    return(
        <div>
            <Jumbotron>
            <h1 className="display-4 font-weight-bolder ">Pokemon List</h1>
            <h1 className="lead mb-4">Click the button below to display all pokemons.</h1>
            <input type="button" value="Fetch Pokemon" onClick={onClickHandler} className="btn btn-sm btn-primary"></input>
            </Jumbotron>
            {state.map((pokemon, i) => (
                <p key={i}>{pokemon.name}</p>
            ))}
        </div>
    )
}

export default PageWrapper