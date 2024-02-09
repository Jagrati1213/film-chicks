import React from 'react'
import MovieCardSkeleton from './MovieCardSkeleton'

function MovieListSekeleton({ number = 5 }) {
    return (
        <div className=' bg-black bg-opacity-50'>
            <h1 className="skeleton-heading"></h1>
            <div className='skeleton-div'>
                {Array(number).fill(null).map((_, i) => {
                    return <MovieCardSkeleton key={i} />
                })
                }
            </div>
        </div>
    )
}

export default MovieListSekeleton