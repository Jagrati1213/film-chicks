import React from 'react'
import { CastCardSkeleton } from './CastCardSkeleton'

export const CastListSkeleton = () => {
    return (
        <>
            <h1 className="skeleton-heading"></h1>
            <div className='skeleton-div'>
                {
                    Array(4).fill(null).map((_, i) => {
                        return <CastCardSkeleton key={i} />
                    })
                }
            </div>
        </>
    )
}
