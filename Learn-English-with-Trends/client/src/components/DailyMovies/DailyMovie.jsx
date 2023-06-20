import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DailyMovie = () => {

    const [movie, setMovie] = useState({});

    const getMovie = async () => {
        try {
            const { data: response } = await axios.get("http://localhost:8080/api/movie")
            setMovie(response.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <>
           
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={movie.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{movie.name} <strong className='text-3xl'>{movie.year}</strong></h1>
                        
                        <p className="py-6">{movie.about}</p>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default DailyMovie
