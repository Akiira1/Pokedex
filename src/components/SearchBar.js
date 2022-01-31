import React from 'react';

const SearchBar = () => {

    window.addEventListener('DOMContentLoaded', () => {
        
        const search = document.getElementById("search")
        search.addEventListener('click', (e) => {

            const {value} = e.target

            const pokemonName = document.querySelectorAll(".thumb-container")

            pokemonName.forEach((nom)=> { 
                console.log(nom.firstElementChild.nextSibling.firstElementChild.nextSibling.firstElementChild);
                if (nom.firstElementChild.nextSibling.firstElementChild.nextSibling.firstElementChild.textContent.toLowerCase().includes(value.toLowerCase())) {
                    nom.style.display = "block"
                    console.log(nom);
                }else {
                    nom.style.display = "none"
                }
            }
            )
        })
    })


    return (
        <div className="search-bar btn btn-dark">
            <form id="form" className="form">
                <input className="input-search" type="search" name="search" id="search" placeholder="search Pokemon"/>
            </form>
        </div>
    );
};

export default SearchBar;