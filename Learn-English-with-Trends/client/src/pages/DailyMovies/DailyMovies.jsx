import React, { lazy } from 'react'
const DailyMovie = lazy(() => import('../../components/DailyMovies/DailyMovie'))
const DailyMovies = () => {


  return (
    <>
     
      <DailyMovie />

    </>
  )
}

export default DailyMovies
