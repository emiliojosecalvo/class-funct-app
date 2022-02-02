import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Movies() {
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState('');
    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://swapi.dev/api/films/${number}`);//fetch data from API
            setMovie(res.data);
            console.log(res.data)
        }
        getData();
    }, [number]);//Conditional for useEffect that run the function when this get a changem ,l
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    return (
        <>
            <h1> Hi From Movies Component</h1>
            <h2>{movie.title}</h2>
            <p>{movie.opening_crawl}</p>
            <select value={number} onChange={e => setNumber(e.target.value)}>
                {numbers.map(n => {
                    return <option key={n} value={n}>{n}</option>
                })}
            </select>
        </>
    )
}

export default Movies;
