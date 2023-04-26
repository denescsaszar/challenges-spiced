import React from 'react';
import MovieCard from '../MovieCard/MovieCard.js';
import './Movies.css';

import { movies } from '../../Data/movies';

export default function Movies() {
    console.log('Movies: ', movies);
    return (
        <main className='movies'>
            <h1 className='movies__title'>Some great movies</h1>
            <section className='movies__movies'>
                <h2>Here we want to display different movies cards</h2>
                {movies.map((movie, index) => {
                    return <MovieCard key={index} movie={movie}/>;
                })}
            </section>
        </main>
    );
}
