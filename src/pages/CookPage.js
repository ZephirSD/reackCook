import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const CookPage = () => {
    const [searchRepas, setSearchRepas] = useState("");
    const [repasList, setrepasList] = useState([]);
    const fetchRepas = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchRepas}`)
            .then(response => setrepasList(response.data.meals))
    }
    useEffect(fetchRepas, [searchRepas]);
    return (
        <>
            <header>
                <h1 className="titre">React Cook</h1>
                <input type="text" onChange={(e) => setSearchRepas(e.target.value)} className='inputSearch'/>
            </header>
            <section className="grid_card">
                {repasList && repasList
                    .filter((search) => search.strMeal.toLowerCase().includes(searchRepas.toLowerCase()))
                    .map((repas, index) => (
                    <Card key={index} source={repas} />
                ))}
            </section>
        </>
    );
};

export default CookPage;