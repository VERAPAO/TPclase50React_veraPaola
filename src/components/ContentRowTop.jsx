import React from 'react'
import { ContentRowMovies } from './ContentRowMovies';
import { LastMovieInDb } from './LastMovieInDb';
import { GenresInDb } from './GenresInDb';

export const ContentRowTop = () => {
  return (
            
<div class="container-fluid">
    {/* Content Row Top */}
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

       <ContentRowMovies />
        

        {/* Content Row Last Movie in Data Base */}
        <div class="row">
            <LastMovieInDb />
            <GenresInDb />

           
        </div>
        {/*End Content Row Top*/}
    </div>
  )
}

